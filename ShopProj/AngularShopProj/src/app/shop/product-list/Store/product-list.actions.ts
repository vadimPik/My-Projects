import { ShoppingListState } from '../../shopping-list/model/shoppingList.model';
import { Action } from '@ngrx/store';
import { Product, ProductListState } from '../model/products.model';

export const GET_PRODUCT =  '[Product List] Get Product';
export const GET_PRODUCT_SUCCESS =  '[Product List] Get Product Success';
export const GET_PRODUCT_FAILED =  '[Product List] Get Product Success Failed';


export class GetProductAction implements Action {
  readonly type = GET_PRODUCT;

//  constructor(public payload: Array<Product>) {}
}

export class GetProductSuccessAction implements Action {
  readonly type = GET_PRODUCT_SUCCESS;

  constructor(public payload: ProductListState) {}
}

export class GetProductFailedAction implements Action {
  readonly type = GET_PRODUCT_FAILED;
}


export type ProductListActions =
 | GetProductAction
 | GetProductSuccessAction
 | GetProductFailedAction;
