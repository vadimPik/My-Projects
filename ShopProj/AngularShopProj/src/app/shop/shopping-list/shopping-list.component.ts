import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Product } from '../product-list/model/products.model';
import { Store } from '@ngrx/store';
import { AppRootState } from 'src/app/reducers';
import { takeUntil, map } from 'rxjs/operators';
import { totalPriceSelector, shoppingListProductsSelector, numberOfProductsSelector, shoppingListIDSelector } from './Store/shopping-list.selector';
import * as ShoppingListActions from './Store/shopping-list.actions';
import { ShoppingListState, ShoppingListDeleteRequest, ShoppingListUpdateQuantityRequest } from './model/shoppingList.model';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Actions } from '@ngrx/store-devtools/src/reducer';
import { ofType } from '@ngrx/effects';
import { LOGIN_SUCCESS, LoginSuccessAction } from 'src/app/login/store/login.actions';
import { UserDetails } from 'src/app/login/login.model';
import { ShoppingListService } from './Services/shopping-list.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ProductListService } from '../product-list/Services/product-list.service';
import { GetShoppingListProductsAction } from './Store/shopping-list.actions';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})

export class ShoppingListComponent implements OnInit, OnDestroy {

  ngUnsubscribe = new Subject<void>();

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  };

  products: Product[];
  totalPrice: number;
  numberOfProducts: number;
  shoppingListID: number;
  UserID: string;
  existProductTobuy: boolean = false;
  public headers: Array<any> = ['ProductName', 'ProductPrice', 'ProductPicture', 'Quantity', ''];


  constructor(private store: Store<AppRootState>, private shoppingListServer:ShoppingListService, private productListServer:ProductListService  ) {

  }


  ngOnInit() {

  this.store.dispatch(new GetShoppingListProductsAction());

  this.shoppingListServer.userID.pipe(takeUntil(this.ngUnsubscribe)).subscribe(userId => {
    this.UserID = userId;
  });

   this.store.select(shoppingListProductsSelector, takeUntil(this.ngUnsubscribe)).subscribe((res: Product[]) => {
   // this.products = res;
   this.products = JSON.parse(JSON.stringify(res));
  });

    this.store.select(totalPriceSelector, takeUntil(this.ngUnsubscribe)).subscribe(value => {
      this.totalPrice = value;
    });


    this.store.select(numberOfProductsSelector, takeUntil(this.ngUnsubscribe)).subscribe(value => {
      this.numberOfProducts = value;

      if(this.numberOfProducts > 0) {
        this.existProductTobuy = true;
      }
    });
    
    this.store.select(shoppingListIDSelector, takeUntil(this.ngUnsubscribe)).subscribe((res: number) => {
      this.shoppingListID = res;
    });
  }

  onDeleteProduct(index: number) {

    const shoppingListDeleteRequest: ShoppingListDeleteRequest = {

      UserID: this.UserID,
      ShoppingListID: this.shoppingListID,
      ItemID: this.products[index].ItemID,
      //Delete one item from this type
      Quantity: 1,
      IndexToDelete: index
    };

    this.productListServer.setIsDisableAddButton(false);

    this.store.dispatch(new ShoppingListActions.DeleteProductAction(shoppingListDeleteRequest));
  }

  onUpdateQuantity(index: number) {

    const shoppingListUpdateQuantityRequest: ShoppingListUpdateQuantityRequest = {
      ShoppingListID: this.shoppingListID,
      ItemID: this.products[index].ItemID,
      //Quantity updated from ngModel
      Quantity: this.products[index].Quantity,
      IndexToUpdate: index,
     UpdatedTotalPrice: 0,
     UpdatedNumberOfProducts: 0,
      UpdatedProducts: this.products
    };

    this.store.dispatch(new ShoppingListActions.UpdateQuantityAction(shoppingListUpdateQuantityRequest));
  }
}
