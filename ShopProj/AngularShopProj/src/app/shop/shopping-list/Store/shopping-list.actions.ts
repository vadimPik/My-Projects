import { Action } from '@ngrx/store';
import { Product } from '../../product-list/model/products.model';
import { ShoppingListProduct, ShoppingListState, ShoppingListDeleteRequest, ShoppingListUpdateQuantityRequest } from '../model/shoppingList.model';

export const ADD_PRODUCT =  '[Shopping List] Add Product';
export const ADD_PRODUCT_SUCCESS =  '[Shopping List] Add Product Success';
export const ADD_PRODUCT_FAILED =  '[Shopping List] Add Product Failed';
export const DELETE_PRODUCT = '[Shopping List] Delete Product';
export const DELETE_PRODUCT_SUCCESS = '[Shopping List] Delete Product Success';
export const DELETE_PRODUCT_FAILED = '[Shopping List] Delete Product Failed';
export const UPDATE_QUANTITY = '[Shopping List] Update Quantity';
export const UPDATE_QUANTITY_SUCCESS = '[Shopping List] Update Quantity Success';
export const UPDATE_QUANTITY_FAILED = '[Shopping List] Update Quantity Failed';

export const GET_SL_PRODUCT =  '[Product List] Get Shopping List Products';
export const GET_SL_PRODUCT_SUCCESS =  '[Product List] Get Shopping List Products Success';
export const GET_SL_PRODUCT_FAILED =  '[Product List] Get Shopping List Products Success Failed';


export class GetShoppingListProductsAction implements Action {
  readonly type = GET_SL_PRODUCT;
}

export class GetShoppingListProductsSuccessAction implements Action {
  readonly type = GET_SL_PRODUCT_SUCCESS;

  constructor(public payload: ShoppingListState) {}
}

export class GetShoppingListProductsFailedAction implements Action {
  readonly type = GET_SL_PRODUCT_FAILED;
}

export class AddProductAction implements Action {
  readonly type = ADD_PRODUCT;

 // constructor(public payload: ShoppingListProduct) {}
 constructor(public payload: ShoppingListProduct) {}
}

export class AddProductSuccessAction implements Action {
  readonly type = ADD_PRODUCT_SUCCESS;

  constructor(public payload: ShoppingListProduct) {}
}

export class AddProductFailedAction implements Action {
  readonly type = ADD_PRODUCT_FAILED;

 // constructor(public payload: Product) {}
}


export class DeleteProductAction implements Action {
  readonly type = DELETE_PRODUCT;

  constructor(public payload: ShoppingListDeleteRequest) {}
}

export class DeleteProductSuccessAction implements Action {
  readonly type = DELETE_PRODUCT_SUCCESS;

  constructor(public payload: number) {}
}


export class DeleteProductFailedAction implements Action {
  readonly type = UPDATE_QUANTITY_FAILED;

  constructor(public payload: number) {}
}

export class UpdateQuantityAction implements Action {
  readonly type = UPDATE_QUANTITY;

  constructor(public payload: ShoppingListUpdateQuantityRequest) {}
}

export class UpdateQuantitySuccessAction implements Action {
  readonly type = UPDATE_QUANTITY_SUCCESS;

  constructor(public payload: ShoppingListUpdateQuantityRequest) {}
}


export class UpdateQuantityFailedAction implements Action {
  readonly type = DELETE_PRODUCT_FAILED;

  constructor(public payload: ShoppingListUpdateQuantityRequest) {}
}


export type ShoppingListActions =
 | AddProductAction
 | AddProductSuccessAction
 | AddProductFailedAction
 | DeleteProductAction
 | DeleteProductSuccessAction
 | DeleteProductFailedAction
 | UpdateQuantityAction
 | UpdateQuantitySuccessAction
 | UpdateQuantityFailedAction
 | GetShoppingListProductsAction
 | GetShoppingListProductsSuccessAction
 | GetShoppingListProductsFailedAction;
