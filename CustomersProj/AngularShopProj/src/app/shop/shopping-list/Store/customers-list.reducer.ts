import { AppComponent } from '../../../app.component';
import { CustomerListState } from '../model/CustomersList.model';
import * as CustomersListActions from './Customers-list.actions';
import { ApplicationModule } from '@angular/core';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { cloneDeep } from 'lodash';
//import { Product } from '../../product-list/model/customers.model';


const initialState: CustomerListState = {
  Customers: [],
  TotalCustomersCount: 0,
  ErrorMessage: undefined
};

export function CustomersListReducer(state: CustomerListState = initialState, action: CustomersListActions.CustomersListActions) {

  switch (action.type) {
    case CustomersListActions.GET_CUSTOMERS:
      return { ...state, ...action };

    case CustomersListActions.GET_CUSTOMERS_SUCCESS:
     // return { ...state, ...action.payload };
     return { ...state, 
              Customers: action.payload.Customers,
              TotalCustomersCount: action.payload.TotalCustomersCount
    };

    case CustomersListActions.GET_CUSTOMERS_FAILED:
      return { ...state, ...action };

    case CustomersListActions.CLEAR_CUSTOMERS_LIST:
      return {
        Customers: [],
        TotalCustomersCount: 0,
        ErrorMessage: undefined
      };

    // case CustomersListActions.ADD_CUSTOMERS_SUCCESS:
    //   return { ...state, ...action };
      // return {
      //   ...state,
      //   Customers : [...state.Customers, action.payload],
      //   TotalCustomersCount: state.TotalCustomers + 1,
      // };

      case CustomersListActions.ADD_CUSTOMERS_SUCCESS:
         return { ...state, ...action };


    case CustomersListActions.ADD_CUSTOMERS_FAILED:
      return { ...state, ...action };

      case CustomersListActions.DELETE_CUSTOMERS_SUCCESS: 
           return { ...state, ...action };
      

    // case CustomersListActions.DELETE_CUSTOMERS_SUCCESS: {
    //   return { ...state, ...action };
    //   // const customerToDelete = state.Customers[action.payload];

    //   // return {
    //   //   ...state,
    //   //   Customers: state.Customers.filter((customer) => {
    //   //          return customer !== customerToDelete;
    //   //   }),
    //   //   TotalCustomersCount: state.TotalCustomers - 1 
    //   // };
    // }

    case CustomersListActions.DELETE_CUSTOMERS_FAILED:
      return { ...state, ...action };
    
    default:
      return state;
  }


}
