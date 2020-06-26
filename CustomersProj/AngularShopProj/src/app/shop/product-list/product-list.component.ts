// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Subject, Observable } from 'rxjs';
// import { Product, ProductListState } from './model/customers.model';
// import { Store } from '@ngrx/store';
// import { AppRootState } from 'src/app/reducers';
// import { totalPriceSelector, shoppingListIDSelector, shoppingListProductsSelector } from '../shopping-list/Store/shopping-list.selector';
// import { takeUntil } from 'rxjs/operators';
// import * as ShoppingListActions from '../shopping-list/Store/Customers-list.actions';
// import { productListProductsSelector } from './Store/product-list.selector';
// import { GetProductAction } from './Store/product-list.actions';
// import { Actions } from '@ngrx/store-devtools/src/reducer';
// //import { ShoppingListProduct } from '../shopping-list/model/CustomersList.model';
// import { ProductListService } from './Services/product-list.service';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.scss']
// })

// export class ProductListComponent implements OnInit, OnDestroy {
//   ngUnsubscribe = new Subject<void>();

//   ngOnDestroy(): void {
//     this.ngUnsubscribe.next();
//     this.ngUnsubscribe.complete();
//   };

//   config : any;
//   collection :[];


//   // isDisabled: boolean;
//   public page:any;
//   products: Product[];
//   // shoppingListProducts: Product[];
//   // shoppingListID: number;
//   // totalPrice: number;
//   // rowIWannaDisable: number;

// //  public headers: Array<any> = ['ProductName', 'ProductPrice', 'ProductPicture', ''];

//   constructor(private store: Store<AppRootState>, private productListService: ProductListService, private route: ActivatedRoute, private router: Router ) {

//     this.config = {
//       currentPage : 1,
//       itemsPerPage : 20,
//       totalItems : 0
//     }

//     route.queryParams.subscribe(
//       params => this.config.currentPage = params['page'] ? params['page']: 1);
    
//   }


//   onPageChanged(newPage: number){
//   //  this.router.navigate([''], {queryParams: {page: newPage} });
//     this.page = newPage;
//   //  this.products;
//   //  window.scrollTo(0,0);
//   }

//   ngOnInit() {


//     this.store.dispatch(new GetProductAction());


//     this.store.select(productListProductsSelector).subscribe((res: Product[]) => {
//       this.products = res;
//     });

//     // this.store.select(shoppingListIDSelector).subscribe((res: number) => {
//     //   this.shoppingListID = res;
//     // });

//     // this.store.select(shoppingListProductsSelector, takeUntil(this.ngUnsubscribe)).subscribe((res: Product[]) => {
//     //   this.shoppingListProducts = res;
//     // });

//     // this.productListService.isDisableAddButton.pipe(takeUntil(this.ngUnsubscribe)).subscribe(isDisabled => {
//     //   this.isDisabled = isDisabled;
//     // });
//   }


//   // onAddToShoppingList(index: number) {
//   //   const shoppingListProduct: ShoppingListProduct = {
//   //     ProductName: this.products[index].ProductName,
//   //     ProductPrice: this.products[index].ProductPrice,
//   //     ProductPicturePath: this.products[index].ProductPicturePath,
//   //     ItemID: this.products[index].ItemID,
//   //     Quantity: 1,
//   //     ShoppingListID: this.shoppingListID
//   // };

//   //   this.productListService.setIsDisableAddButton(true);
//   //   this.rowIWannaDisable =index;

//   //   this.store.dispatch(new ShoppingListActions.AddProductAction(shoppingListProduct));

//   // }


// }
