import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Product, ProductListState } from './model/products.model';
import { Store } from '@ngrx/store';
import { AppRootState } from 'src/app/reducers';
import { totalPriceSelector, shoppingListIDSelector, shoppingListProductsSelector } from '../shopping-list/Store/shopping-list.selector';
import { takeUntil } from 'rxjs/operators';
import * as ShoppingListActions from '../shopping-list/Store/shopping-list.actions';
import { productListProductsSelector } from './Store/product-list.selector';
import { GetProductAction } from './Store/product-list.actions';
import { Actions } from '@ngrx/store-devtools/src/reducer';
import { ShoppingListProduct } from '../shopping-list/model/shoppingList.model';
import { ProductListService } from './Services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit, OnDestroy {
  ngUnsubscribe = new Subject<void>();

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  };


  // isDisabled: boolean;
  public page:any;
  products: Product[];
  // shoppingListProducts: Product[];
  // shoppingListID: number;
  // totalPrice: number;
  // rowIWannaDisable: number;

//  public headers: Array<any> = ['ProductName', 'ProductPrice', 'ProductPicture', ''];

  constructor(private store: Store<AppRootState>, private productListService: ProductListService  ) {}


  ngOnInit() {


    this.store.dispatch(new GetProductAction());


    this.store.select(productListProductsSelector).subscribe((res: Product[]) => {
      this.products = res;
    });

    // this.store.select(shoppingListIDSelector).subscribe((res: number) => {
    //   this.shoppingListID = res;
    // });

    // this.store.select(shoppingListProductsSelector, takeUntil(this.ngUnsubscribe)).subscribe((res: Product[]) => {
    //   this.shoppingListProducts = res;
    // });

    // this.productListService.isDisableAddButton.pipe(takeUntil(this.ngUnsubscribe)).subscribe(isDisabled => {
    //   this.isDisabled = isDisabled;
    // });
  }


  // onAddToShoppingList(index: number) {
  //   const shoppingListProduct: ShoppingListProduct = {
  //     ProductName: this.products[index].ProductName,
  //     ProductPrice: this.products[index].ProductPrice,
  //     ProductPicturePath: this.products[index].ProductPicturePath,
  //     ItemID: this.products[index].ItemID,
  //     Quantity: 1,
  //     ShoppingListID: this.shoppingListID
  // };

  //   this.productListService.setIsDisableAddButton(true);
  //   this.rowIWannaDisable =index;

  //   this.store.dispatch(new ShoppingListActions.AddProductAction(shoppingListProduct));

  // }


}
