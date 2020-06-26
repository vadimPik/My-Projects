// import { Component, OnInit, Input, OnDestroy } from '@angular/core';
// import { Product } from '../product-list/model/customers.model';
// import { ShoppingListProduct } from '../shopping-list/model/CustomersList.model';
// import { Store } from '@ngrx/store';
// import { AppRootState } from 'src/app/reducers';
// import { ProductListService } from '../product-list/Services/product-list.service';
// import { GetProductAction } from '../product-list/Store/product-list.actions';
// import { productListProductsSelector } from '../product-list/Store/product-list.selector';
// import { shoppingListIDSelector, shoppingListProductsSelector } from '../shopping-list/Store/shopping-list.selector';
// import { Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
// import * as ShoppingListActions from '../shopping-list/Store/Customers-list.actions';

// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.scss']
// })
// export class ProductComponent implements OnInit, OnDestroy {

//   @Input() product: Product;
//  // products: Product[];
//   //isDisabled: boolean;
//   //shoppingListProducts: Product[];
//   shoppingListID: number;
//   rowIWannaDisable: number;

//   constructor(private store: Store<AppRootState>, private productListService: ProductListService  ) { }

//   ngUnsubscribe = new Subject<void>();

//   ngOnDestroy(): void {
//     this.ngUnsubscribe.next();
//     this.ngUnsubscribe.complete();
//   };

//   ngOnInit(): void {
//     window.scrollTo(0, 0);

//     this.store.select(shoppingListIDSelector, takeUntil(this.ngUnsubscribe)).subscribe((res: number) => {
//       this.shoppingListID = res;
//     });

//   }


//   onAddToShoppingList(index: number) {
//     const shoppingListProduct: ShoppingListProduct = {
//       ProductName: this.product.ProductName,
//       ProductPrice: this.product.ProductPrice,
//       ProductPicturePath: this.product.ProductPicturePath,
//       ItemID: this.product.ItemID,
//       Quantity: 1,
//       ShoppingListID: this.shoppingListID
//   };

//     this.productListService.setIsDisableAddButton(true);
//     this.rowIWannaDisable =index;

//     this.store.dispatch(new ShoppingListActions.AddProductAction(shoppingListProduct));

//   }

// }
