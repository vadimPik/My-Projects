import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable, of as observableOf, of } from 'rxjs';
//import { GetProductAction, GET_PRODUCT, GetProductSuccessAction, GetProductFailedAction } from './product-list.actions';
import { mergeMap, catchError, map, switchMap, tap, concatMapTo, mapTo, takeUntil  } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppRootState } from 'src/app/reducers';
import { Router } from '@angular/router';
//import { Product } from '../../product-list/model/customers.model';
import { AddCustomerAction, ADD_CUSTOMERS, AddCustomerFailedAction, AddCustomerSuccessAction, DELETE_CUSTOMERS, DeleteCustomerAction, DeleteCustomerSuccessAction, DeleteCustomerFailedAction, GetCustomersAction, GET_CUSTOMERS, GetCustomersSuccessAction, GetCustomersFailedAction } from './Customers-list.actions';
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
              //  let shoppingListState : ShoppingListState;
              //  shoppingListState = this.shoppingListService.convertShoppingListProductsToShoppingListState(res);
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
    addProduct$: Observable<any> = this.actions.pipe(
      ofType<AddCustomerAction>(ADD_CUSTOMERS),
      mergeMap(action => {
        return this.customerListService.addProduct(action.payload).pipe(
          map((res: Customer) => {
            if (res) {
              return new AddCustomerSuccessAction(res);
            }
            else {
              return new AddCustomerFailedAction("error");
            }
          }),
          catchError(err => {
            return observableOf(new AddCustomerFailedAction(err));
          })
        );
      })
    );

    @Effect()
    deleteProduct$: Observable<any> = this.actions.pipe(
      ofType<DeleteCustomerAction>(DELETE_CUSTOMERS),
      mergeMap(action => {
        return this.customerListService.deleteProduct(action.payload.CustomerID).pipe(
          map((res: string) => {
            if (res) {
              return new DeleteCustomerSuccessAction(action.payload.IndexToDelete);
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


    // @Effect()
    // updateQuantityProduct$: Observable<any> = this.actions.pipe(
    //   ofType<UpdateQuantityAction>(UPDATE_QUANTITY),
    //   mergeMap(action => {
    //     return this.shoppingListService.updateQuantityProduct(action.payload).pipe(
    //       map((res: ShoppingListUpdateQuantityRequest) => {
    //         if (res) {
    //           return new UpdateQuantitySuccessAction(res);
    //         }
    //         else {
    //           return new UpdateQuantityFailedAction(res);
    //         }
    //       }),
    //       catchError(err => {
    //         return observableOf(new UpdateQuantityFailedAction(action.payload));
    //       })
    //     );
    //   })
    // );
    

    constructor(
        private actions: Actions,
        private customerListService: CustomerListService,
        private store: Store<AppRootState>,
        private router: Router
      ) {}
}