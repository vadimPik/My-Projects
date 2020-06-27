import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable, of as observableOf, of } from 'rxjs';
import { mergeMap, catchError, map, switchMap, tap, concatMapTo, mapTo, takeUntil  } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppRootState } from 'src/app/reducers';
import { Router } from '@angular/router';
import { AddCustomerAction, ADD_CUSTOMERS, AddCustomerFailedAction, AddCustomerSuccessAction, DELETE_CUSTOMERS, DeleteCustomerAction, DeleteCustomerSuccessAction, DeleteCustomerFailedAction, GetCustomersAction, GET_CUSTOMERS, GetCustomersSuccessAction, GetCustomersFailedAction, ADD_CUSTOMERS_SUCCESS, DELETE_CUSTOMERS_SUCCESS } from './Customers-list.actions';
import { CustomerListState, Customer } from '../model/CustomersList.model';
import { CustomerListService } from '../Services/customers-list.service';


@Injectable()
export class CustomersListEffects {

    @Effect()
    getCustomersList$: Observable<any> = this.actions.pipe(
      ofType<GetCustomersAction>(GET_CUSTOMERS),
      mergeMap(action => {
        return this.customerListService.getCustomersListProducts(action.payload).pipe(
          map((res: CustomerListState) => {
            if (res) {
                return new GetCustomersSuccessAction(res);
            }
            else {
              return new GetCustomersFailedAction(res.ErrorMessage);
            }
          }),
          catchError(err => {
            return observableOf(new GetCustomersFailedAction(err));
          })
        )
      })
    );

    @Effect()
    addCustomer$: Observable<any> = this.actions.pipe(
      ofType<AddCustomerAction>(ADD_CUSTOMERS),
      mergeMap(action => {
        return this.customerListService.addProduct(action.payload).pipe(
          map((res: string) => {
            // if (res.includes("exists") || res.includes("successfully")) {
              return new AddCustomerSuccessAction(res);
            // }
            // else {
            //   return new AddCustomerFailedAction("error");
            // }
          }),
          catchError(err => {
            return observableOf(new AddCustomerFailedAction(err));
          })
        );
      })
    );


    @Effect()
    deleteCustomer$: Observable<any> = this.actions.pipe(
      ofType<DeleteCustomerAction>(DELETE_CUSTOMERS),
      mergeMap(action => {
        return this.customerListService.deleteProduct(action.payload.CustomerID).pipe(
          map((res: string) => {
            if (res) {
              return new DeleteCustomerSuccessAction(res);
            }
            else {
              return new DeleteCustomerFailedAction(res);
            }
          }),
          catchError(err => {
            return observableOf(new DeleteCustomerFailedAction(err));
          })
        );
      })
    );
    
    constructor(
        private actions: Actions,
        private customerListService: CustomerListService,
        private store: Store<AppRootState>,
        private router: Router
      ) {}
}