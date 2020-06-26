import { AppComponent } from '../../../app.component';
import { CustomerListState } from '../model/CustomersList.model';
import * as CustomersListActions from './Customers-list.actions';
import { ApplicationModule } from '@angular/core';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { cloneDeep } from 'lodash';
//import { Product } from '../../product-list/model/customers.model';


const initialState: CustomerListState = {
  Customers: [],
  TotalCustomers: 0,
  ErrorMessage: undefined
};

export function CustomersListReducer(state: CustomerListState = initialState, action: CustomersListActions.CustomersListActions) {

  switch (action.type) {
    case CustomersListActions.GET_CUSTOMERS:
      return { ...state, ...action };

    case CustomersListActions.GET_CUSTOMERS_SUCCESS:
      return { ...state, ...action.payload };

    case CustomersListActions.GET_CUSTOMERS_FAILED:
      return { ...state, ...action };

    case CustomersListActions.CLEAR_CUSTOMERS_LIST:
      return {
        Customers: [],
        TotalCustomers: 0,
        ErrorMessage: undefined
      };

    case CustomersListActions.ADD_CUSTOMERS_SUCCESS:
      // return { ...state, ...action.payload };
      return {
        ...state,
        Customers : [...state.Customers, action.payload],
        TotalCustomers: state.TotalCustomers + 1,
      };

      // return {
      //   ...state,
      //   ...{
      //   customers : [...state.customers, action.payload] }
      // //  totalCustomers: state.totalCustomers + 1
      // };

    case CustomersListActions.ADD_CUSTOMERS_FAILED:
      return { ...state, ...action };
      // return { ...state, 
      //          ...{ ErrorMessage: action.payload } };


    case CustomersListActions.DELETE_CUSTOMERS_SUCCESS: {
      const customerToDelete = state.Customers[action.payload];

      return {
        ...state,
        Customers: state.Customers.filter((customer) => {
               return customer !== customerToDelete;
        }),
        TotalCustomers: state.TotalCustomers - 1 

        // ...{
        // customers: state.Customers.filter((customer) => {
        //     return customer !== productToDelete;
        // }) }
       
        // totalCustomers: state.totalCustomers - 1 
      };
    }

    case CustomersListActions.DELETE_CUSTOMERS_FAILED:
      return { ...state, ...action };
        // return { ...state, 
        //          ...{ ErrorMessage: action.payload } };
    
    default:
      return state;
  }


}
