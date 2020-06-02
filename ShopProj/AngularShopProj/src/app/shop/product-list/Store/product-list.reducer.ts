import { AppComponent } from '../../../app.component';
import { ShoppingListState } from '../../shopping-list/model/shoppingList.model';
import * as ProductListActions from './product-list.actions';
import { ApplicationModule } from '@angular/core';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { cloneDeep } from 'lodash';
import { Product, ProductListState } from '../model/products.model';


const initialState: ProductListState = {
  products: [],
  ErrorMessage: null
};

export function ProductListReducer(state: ProductListState = initialState, action: ProductListActions.ProductListActions) {

  switch (action.type) {
    case ProductListActions.GET_PRODUCT:
      return { ...state, ...action };

    case ProductListActions.GET_PRODUCT_SUCCESS:
      return { ...state, ...action.payload };

    case ProductListActions.GET_PRODUCT_FAILED:
      return { ...state, ...action };

    default:
      return state;
  }


}
