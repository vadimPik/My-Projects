import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable, of as observableOf, of } from 'rxjs';
import { GetProductAction, GET_PRODUCT, GetProductSuccessAction, GetProductFailedAction } from './product-list.actions';
import { mergeMap, catchError, map, switchMap, tap, concatMapTo, mapTo  } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppRootState } from 'src/app/reducers';
import { Router } from '@angular/router';
import { ProductListService } from '../Services/product-list.service';
import { Product, ProductListState, } from '../model/products.model';


@Injectable()
export class ProductListEffects {

    @Effect()
    getProducts$: Observable<any> = this.actions.pipe(
      ofType<GetProductAction>(GET_PRODUCT),
      mergeMap(action => {
        return this.productListServer.getProducts().pipe(
          map((res: ProductListState) => {
            if (res.products) {
                return new GetProductSuccessAction(res);
            }
            else {
              return new GetProductFailedAction();
            }
          }),
          catchError(err => {
            return observableOf(new GetProductFailedAction());
          })
        );
      })
    );

    constructor(
        private actions: Actions,
        private productListServer: ProductListService,
        private store: Store<AppRootState>,
        private router: Router
      ) {}
}