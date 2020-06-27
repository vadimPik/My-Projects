import { ActionReducerMap } from '@ngrx/store';
import {CustomersListReducer} from './shop/shopping-list/Store/customers-list.reducer';
//import { UserDetails } from './login/login.model';
//import { LoginReducer } from './login/store/login.reducer';
//import { ProductListReducer } from './shop/product-list/Store/product-list.reducer';
import { CustomerListState } from './shop/shopping-list/model/CustomersList.model';
//import { ProductListState } from './shop/product-list/model/customers.model';


export interface AppRootState {
  customerList: CustomerListState;
 // productList: ProductListState;
 // userDetails: UserDetails;
}

export const rootReducers: ActionReducerMap<AppRootState> = {
  customerList: CustomersListReducer
 // userDetails:  LoginReducer,
  //productList: ProductListReducer
};