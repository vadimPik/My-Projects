import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRootState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ApiURL } from 'src/app/api.model';
import { Product } from '../../product-list/model/products.model';
import { Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
// import { BehaviorSubject } from "rxjs";
import { LOGIN_SUCCESS, LoginSuccessAction } from 'src/app/login/store/login.actions';
import { UserDetails } from 'src/app/login/login.model';
import { ShoppingListProduct, ShoppingListRequest, ShoppingListDeleteRequest, ShoppingListUpdateQuantityRequest, ShoppingListState } from '../model/shoppingList.model';
import { ADD_PRODUCT_SUCCESS, AddProductSuccessAction } from '../Store/shopping-list.actions';


@Injectable()
export class ShoppingListService {

    private UserID: string;

    private userIDSource = new BehaviorSubject<string>('');
    private previousNumberOfColumns: number = 0;
    userID = this.userIDSource.asObservable();

    constructor(
        private http: HttpClient,
        private store: Store<AppRootState>,
        private router: Router,
        private actions$: Actions
      ) {

        actions$.pipe(ofType(LOGIN_SUCCESS), map((loginAction: LoginSuccessAction) => loginAction.payload)).subscribe((res: UserDetails) => {
            this.UserID = res.UserID;
            this.setUserID(this.UserID);
        });
        
    }

    setUserID(id: string) {
        this.userIDSource.next(id);
    }


    convertShoppingListProductsToShoppingListState( shoppingListProducts :ShoppingListProduct[]) : ShoppingListState {
        let shoppingListState : ShoppingListState  = new ShoppingListState();
        shoppingListState.products = [];
        for (let i = 0; i <  shoppingListProducts.length; i++) {
          let product : Product = new Product();
          product.ItemID = shoppingListProducts[i].ItemID;
          product.ProductName = shoppingListProducts[i].ProductName;
          product.ProductPicturePath = shoppingListProducts[i].ProductPicturePath;
          product.ProductPrice = shoppingListProducts[i].ProductPrice;
          product.Quantity = shoppingListProducts[i].Quantity;

          shoppingListState.products[i] = product;
        }
      
        shoppingListState.ShoppingListID = shoppingListProducts[0].ShoppingListID;

        let calculatedSummeries = this.CalculateNewTotalSumAndPrice(shoppingListState.products)
        shoppingListState.numberOfProducts = calculatedSummeries.retUpdatedNumberOfProducts;
        shoppingListState.totalprice = calculatedSummeries.retCalculateNewTotalPrice;
       
        return shoppingListState;
    }


    getShoppingListProducts(): Observable<ShoppingListProduct[]> {
      const apiUrl: string = ApiURL.getShoppingListProducts;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
          //'Content-Type': 'application/x-www-form-urlencoded'
        })
      };

      const body = this.UserID;

      return this.http
          .post<ShoppingListProduct[]>(apiUrl, body ,httpOptions)
          .pipe(
            catchError(error => {
              return throwError(error);
            })
          );
    }

    addProduct(product: ShoppingListProduct): Observable<number> {
        const apiUrl: string = ApiURL.addProductToShoppingList;

        if (product.ShoppingListID === undefined) {
            product.ShoppingListID = 0;
        }

        const shoppingListRequest: ShoppingListRequest = {
            ShoppingListID: product.ShoppingListID,
            UserID: this.UserID,
            ItemID: product.ItemID,
            Quantity: product.Quantity,
            productPrice: product.ProductPrice,
            Status: 0
        };

        const body = JSON.stringify(shoppingListRequest);
  
        return this.httpCall(apiUrl, body);
    }

    deleteProduct(shoppingListDeleteRequest: ShoppingListDeleteRequest): Observable<string> {
        const apiUrl: string = ApiURL.deleteProductFromShoppingList;

        const body = JSON.stringify(shoppingListDeleteRequest);

        return this.httpCall(apiUrl, body);
    }

    updateQuantityProduct(shoppingListUpdateQuantityRequest: ShoppingListUpdateQuantityRequest): Observable<string> {
      shoppingListUpdateQuantityRequest = this.UpdateshoppingListUpdateQuantityRequest(shoppingListUpdateQuantityRequest);
      
      const apiUrl: string = ApiURL.updateQuantityProductOnShoppingList;

      const body = JSON.stringify(shoppingListUpdateQuantityRequest);

      return this.httpCall(apiUrl, body);
  }

  httpCall(apiUrl, body) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
       // 'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http
    .post<any>(apiUrl, body, httpOptions)
    .pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }

  UpdateshoppingListUpdateQuantityRequest(shoppingListUpdateQuantityRequest: ShoppingListUpdateQuantityRequest) : ShoppingListUpdateQuantityRequest {
    const UpdatedShoppingList = shoppingListUpdateQuantityRequest.UpdatedProducts;
    
    const res = this.CalculateNewTotalSumAndPrice(UpdatedShoppingList);

    shoppingListUpdateQuantityRequest.UpdatedNumberOfProducts = res.retUpdatedNumberOfProducts;
    shoppingListUpdateQuantityRequest.UpdatedTotalPrice  = res.retCalculateNewTotalPrice;

    return shoppingListUpdateQuantityRequest;
  }

  CalculateNewTotalSumAndPrice(productArr : Product[]) : any {

    let newTotalQuantity: number = 0;
    let CalculateNewTotalPrice : number = 0;
    productArr.forEach(element => {
      newTotalQuantity += +element.Quantity;
      CalculateNewTotalPrice += (element.ProductPrice * element.Quantity);
    });

    return {
      retUpdatedNumberOfProducts : newTotalQuantity,
      retCalculateNewTotalPrice : CalculateNewTotalPrice
    };
  }


}

