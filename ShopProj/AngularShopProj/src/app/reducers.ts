import { ActionReducerMap } from '@ngrx/store';
import {ShoppingListReducer} from './shop/shopping-list/Store/shopping-list.reducer';
import { UserDetails } from './login/login.model';
import { LoginReducer } from './login/store/login.reducer';
import { ProductListReducer } from './shop/product-list/Store/product-list.reducer';
import { ShoppingListState } from './shop/shopping-list/model/shoppingList.model';
import { ProductListState } from './shop/product-list/model/products.model';


export interface AppRootState {
  shoppingList: ShoppingListState;
  productList: ProductListState;
  userDetails: UserDetails;
}

export const rootReducers: ActionReducerMap<AppRootState> = {
  shoppingList: ShoppingListReducer,
  userDetails:  LoginReducer,
  productList: ProductListReducer
};