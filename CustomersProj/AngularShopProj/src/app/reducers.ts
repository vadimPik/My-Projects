import { ActionReducerMap } from '@ngrx/store';
import {CustomersListReducer} from './shop/shopping-list/Store/customers-list.reducer';
import { CustomerListState } from './shop/shopping-list/model/CustomersList.model';


export interface AppRootState {
  customerList: CustomerListState;
}

export const rootReducers: ActionReducerMap<AppRootState> = {
  customerList: CustomersListReducer
};