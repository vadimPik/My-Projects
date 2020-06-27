import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppRootState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ApiURL } from 'src/app/api.model';
//import { Product } from '../../product-list/model/customers.model';
import { Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
// import { BehaviorSubject } from "rxjs";
//import { LOGIN_SUCCESS, LoginSuccessAction } from 'src/app/login/store/login.actions';
//import { UserDetails } from 'src/app/login/login.model';
import {  CustomerListState, Customer } from '../model/CustomersList.model';
import { PaginationRequest } from '../model/Pagination.model';
//import { ADD_CUSTOMERS_SUCCESS, AddCustomerSuccessAction } from '../Store/Customers-list.actions';


@Injectable()
export class CustomerListService {

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

        // actions$.pipe(ofType(LOGIN_SUCCESS), map((loginAction: LoginSuccessAction) => loginAction.payload)).subscribe((res: UserDetails) => {
        //     this.UserID = res.UserID;
        //     this.setUserID(this.UserID);
        // });
        
    }

    getCustomersListProducts(paginationRequest: PaginationRequest): Observable<CustomerListState> {
      const apiUrl: string = ApiURL.getCustomers;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
          //'Content-Type': 'application/x-www-form-urlencoded'
        })
      };

      const body = JSON.stringify(paginationRequest);

      return this.httpCall(apiUrl, body);

      // return this.http
      //     .post<CustomerListState>(apiUrl, body ,httpOptions)
      //     .pipe(
      //       catchError(error => {
      //         return throwError(error);
      //       })
      //     );
    }

    addProduct(product: Customer): Observable<string> {
        const apiUrl: string = ApiURL.addNewCustomer;

        // const shoppingListRequest: ShoppingListRequest = {
        //     ShoppingListID: product.ShoppingListID === undefined? 0 : product.ShoppingListID,
        //     UserID: this.UserID,
        //     ItemID: product.ItemID,
        //     Quantity: product.Quantity,
        //     productPrice: product.ProductPrice,
        //     Status: 0
        // };

        const body = JSON.stringify(product);
  
        return this.httpCall(apiUrl, body);
    }

    deleteProduct(customerIdToDelete: string): Observable<string> {
        const apiUrl: string = ApiURL.deleteCustomer;

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
           // 'Content-Type': 'application/x-www-form-urlencoded'
          })
        };

        const body = JSON.stringify(customerIdToDelete);

        return this.httpCall(apiUrl, body);

        // const body = new HttpParams()
        //   .set('customerIDToDelete', customerIdToDelete)

        
          // return this.http
          // .post<string>(apiUrl, body, httpOptions)
          // .pipe(
          //   catchError(error => {
          //     return throwError(error);
          //   })
          // );
    }

  //   updateQuantityProduct(shoppingListUpdateQuantityRequest: ShoppingListUpdateQuantityRequest): Observable<ShoppingListUpdateQuantityRequest> {

  //     let shoppingListUpdateQuantityRequestCopy = JSON.parse(JSON.stringify(shoppingListUpdateQuantityRequest));
  //     shoppingListUpdateQuantityRequestCopy = this.UpdateshoppingListUpdateQuantityRequest(shoppingListUpdateQuantityRequestCopy);
      
  //     const apiUrl: string = ApiURL.updateQuantityProductOnShoppingList;

  //     const body = JSON.stringify(shoppingListUpdateQuantityRequest);

  //     this.httpCall(apiUrl, body);

  //     return of(shoppingListUpdateQuantityRequestCopy);
  // }

  httpCall(apiUrl, body) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
       // 'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

  //  body = {"pageNumber":"1","pageSize":"20"};
    return this.http
    .post<any>(apiUrl, body, httpOptions)
    .pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }

  // UpdateshoppingListUpdateQuantityRequest(shoppingListUpdateQuantityRequest: ShoppingListUpdateQuantityRequest) : ShoppingListUpdateQuantityRequest {

  //   const UpdatedShoppingList = shoppingListUpdateQuantityRequest.UpdatedProducts;
    
  //   const res = this.CalculateNewTotalSumAndPrice(UpdatedShoppingList);

  //   shoppingListUpdateQuantityRequest.UpdatedNumberOfProducts = res.retUpdatedNumberOfProducts;
  //   shoppingListUpdateQuantityRequest.UpdatedTotalPrice  = res.retCalculateNewTotalPrice;

  //   return shoppingListUpdateQuantityRequest;
  // }

  // CalculateNewTotalSumAndPrice(productArr : Product[]) : any {

  //   let newTotalQuantity: number = 0;
  //   let CalculateNewTotalPrice : number = 0;
  //   productArr.forEach(element => {
  //     newTotalQuantity += +element.Quantity;
  //     CalculateNewTotalPrice += (element.ProductPrice * element.Quantity);
  //   });

  //   return {
  //     retUpdatedNumberOfProducts : newTotalQuantity,
  //     retCalculateNewTotalPrice : CalculateNewTotalPrice
  //   };
  // }


}

