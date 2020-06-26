import { Action } from '@ngrx/store';

import { CustomerListState, Customer, CustomerDeleteRequest } from '../model/CustomersList.model';
import { PaginationRequest } from '../model/Pagination.model';

export const ADD_CUSTOMERS =  '[Customers List] Add Customers';
export const ADD_CUSTOMERS_SUCCESS =  '[Customers List] Add Customers Success';
export const ADD_CUSTOMERS_FAILED =  '[Customers List] Add Customers Failed';
export const CLEAR_CUSTOMERS_LIST =  '[Customers List] Clear Customers List';
export const DELETE_CUSTOMERS = '[Customers List] Delete Customers';
export const DELETE_CUSTOMERS_SUCCESS = '[Customers List] Delete Customers Success';
export const DELETE_CUSTOMERS_FAILED = '[Customers List] Delete Customers Failed';
export const GET_CUSTOMERS =  '[Customers List] Get Customers List';
export const GET_CUSTOMERS_SUCCESS =  '[Customers List] Get Customers Success';
export const GET_CUSTOMERS_FAILED =  '[Customers List] Get Customers Failed';


export class GetCustomersAction implements Action {
  readonly type = GET_CUSTOMERS;

  constructor(public payload: PaginationRequest) {}
}

export class GetCustomersSuccessAction implements Action {
  readonly type = GET_CUSTOMERS_SUCCESS;

  constructor(public payload: CustomerListState) {}
}

export class GetCustomersFailedAction implements Action {
  readonly type = GET_CUSTOMERS_FAILED;

  constructor(public payload: string) {}
}

export class ClearCustomersListAction implements Action {
  readonly type = CLEAR_CUSTOMERS_LIST;
}


export class AddCustomerAction implements Action {
  readonly type = ADD_CUSTOMERS;

 constructor(public payload: Customer) {}
}

export class AddCustomerSuccessAction implements Action {
  readonly type = ADD_CUSTOMERS_SUCCESS;

  constructor(public payload: Customer) {}
}

export class AddCustomerFailedAction implements Action {
  readonly type = ADD_CUSTOMERS_FAILED;

  constructor(public payload: string) {}
}


export class DeleteCustomerAction implements Action {
  readonly type = DELETE_CUSTOMERS;

  constructor(public payload: CustomerDeleteRequest) {}
}

export class DeleteCustomerSuccessAction implements Action {
  readonly type = DELETE_CUSTOMERS_SUCCESS;

  constructor(public payload: number) {}
}


export class DeleteCustomerFailedAction implements Action {
  readonly type = DELETE_CUSTOMERS_FAILED;

  constructor(public payload: string) {}
}


export type CustomersListActions =
 | AddCustomerAction
 | AddCustomerSuccessAction
 | AddCustomerFailedAction
 | DeleteCustomerAction
 | DeleteCustomerSuccessAction
 | DeleteCustomerFailedAction
 | GetCustomersSuccessAction
 | GetCustomersFailedAction
 | GetCustomersAction
 | ClearCustomersListAction;
