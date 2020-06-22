import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable, of as observableOf, of } from 'rxjs';
//import { GetProductAction, GET_PRODUCT, GetProductSuccessAction, GetProductFailedAction } from './product-list.actions';
import { mergeMap, catchError, map, switchMap, tap, concatMapTo, mapTo  } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppRootState } from 'src/app/reducers';
import { Router } from '@angular/router';
//import { ProductListService } from '../Services/product-list.service';
import { Product } from '../../product-list/model/products.model';
import { AddProductAction, ADD_PRODUCT, AddProductFailedAction, AddProductSuccessAction, DELETE_PRODUCT, DeleteProductAction, DeleteProductSuccessAction, DeleteProductFailedAction, UPDATE_QUANTITY, UpdateQuantityAction, UpdateQuantitySuccessAction, UpdateQuantityFailedAction, GetShoppingListProductsAction, GET_SL_PRODUCT, GetShoppingListProductsSuccessAction, GetShoppingListProductsFailedAction } from './shopping-list.actions';
import { ShoppingListState, ShoppingListProduct, ShoppingListUpdateQuantityRequest } from '../model/shoppingList.model';
import { ShoppingListService } from '../Services/shopping-list.service';


@Injectable()
export class ShoppingListEffects {

    @Effect()
    getShoppingListProducts$: Observable<any> = this.actions.pipe(
      ofType<GetShoppingListProductsAction>(GET_SL_PRODUCT),
      mergeMap(action => {
        return this.shoppingListService.getShoppingListProducts().pipe(
          map((res: ShoppingListProduct[]) => {
            if (res) {
                let shoppingListState : ShoppingListState;
                shoppingListState = this.shoppingListService.convertShoppingListProductsToShoppingListState(res);
                return new GetShoppingListProductsSuccessAction(shoppingListState);
            }
            else {
              return new GetShoppingListProductsFailedAction();
            }
          }),
          catchError(err => {
            return observableOf(new GetShoppingListProductsFailedAction());
          })
        );
      })
    );

    @Effect()
    addProduct$: Observable<any> = this.actions.pipe(
      ofType<AddProductAction>(ADD_PRODUCT),
      mergeMap(action => {
        return this.shoppingListService.addProduct(action.payload).pipe(
          map((res: number) => {
            if (res) {
              return new AddProductSuccessAction(action.payload);
            }
            else {
              return new AddProductFailedAction();
            }
          }),
          catchError(err => {
            return observableOf(new AddProductFailedAction());
          })
        );
      })
    );

    @Effect()
    deleteProduct$: Observable<any> = this.actions.pipe(
      ofType<DeleteProductAction>(DELETE_PRODUCT),
      mergeMap(action => {
        return this.shoppingListService.deleteProduct(action.payload).pipe(
          map((res: string) => {
            if (res) {
              return new DeleteProductSuccessAction(action.payload.IndexToDelete);
            }
            else {
              return new DeleteProductFailedAction(action.payload.IndexToDelete);
            }
          }),
          catchError(err => {
            return observableOf(new DeleteProductFailedAction(action.payload.IndexToDelete));
          })
        );
      })
    );


    @Effect()
    updateQuantityProduct$: Observable<any> = this.actions.pipe(
      ofType<UpdateQuantityAction>(UPDATE_QUANTITY),
      mergeMap(action => {
        return this.shoppingListService.updateQuantityProduct(action.payload).pipe(
          map((res: ShoppingListUpdateQuantityRequest) => {
            if (res) {
              return new UpdateQuantitySuccessAction(res);
            }
            else {
              return new UpdateQuantityFailedAction(res);
            }
          }),
          catchError(err => {
            return observableOf(new UpdateQuantityFailedAction(action.payload));
          })
        );
      })
    );
    

    constructor(
        private actions: Actions,
        private shoppingListService: ShoppingListService,
        private store: Store<AppRootState>,
        private router: Router
      ) {}
}