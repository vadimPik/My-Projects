import { AppComponent } from '../../../app.component';
import { ShoppingListState } from '../model/shoppingList.model';
import * as ShoppingListActions from './shopping-list.actions';
import { ApplicationModule } from '@angular/core';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { cloneDeep } from 'lodash';
import { Product } from '../../product-list/model/products.model';


const initialState: ShoppingListState = {
  products: [],
  totalprice: 0,
  numberOfProducts: 0,
  ShoppingListID: undefined,
  Status: undefined,
  ErrorMessage: undefined
};

export function ShoppingListReducer(state: ShoppingListState = initialState, action: ShoppingListActions.ShoppingListActions) {

  switch (action.type) {
    case ShoppingListActions.GET_SL_PRODUCT:
      return { ...state, ...action };

    case ShoppingListActions.GET_SL_PRODUCT_SUCCESS:
      return { ...state, ...action.payload };

    case ShoppingListActions.GET_SL_PRODUCT_FAILED:
      return { ...state, ...action };

    case ShoppingListActions.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products : [...state.products, action.payload],
        totalprice: state.totalprice + action.payload.ProductPrice,
        numberOfProducts: state.numberOfProducts + 1,
        ShoppingListID: action.payload.ShoppingListID,
        Status: 0,
        Quantity: action.payload.Quantity
      };

    case ShoppingListActions.ADD_PRODUCT_FAILED:
      return { ...state, ...action };

    //Filter- create new list without the product in index that want to delete.
    //action.payload - Index in product that want to delete.
    //product.index - index of the current product. filter function pass on all products.
    case ShoppingListActions.DELETE_PRODUCT_SUCCESS:
      const productToDelete = state.products[action.payload];

      return {
        ...state,
        //products: delete cloneDeep(state.products)[action.payload],
          products: state.products.filter((product) => {
            return product !== productToDelete;
        }),
        totalprice: state.totalprice - (productToDelete.ProductPrice * productToDelete.Quantity),
        numberOfProducts: state.numberOfProducts - productToDelete.Quantity,
      //  ShoppingListID: action.payload.ShoppingListID,
        Status: 0,
      //  Quantity: productToDelete.Quantity - 1
      };

    case ShoppingListActions.DELETE_PRODUCT_FAILED:
        return { ...state, ...action };
    
    case ShoppingListActions.UPDATE_QUANTITY_SUCCESS:
     
      const productToUpdate = state.products[action.payload.IndexToUpdate];

      




     // productToUpdate.Quantity = action.payload.Quantity;
      let numericQuantity : number;

      numericQuantity = parseInt( productToUpdate.Quantity.toString());
      let totalPriceWithoutChangedItem = state.totalprice - (productToUpdate.ProductPrice * numericQuantity);
      let totalNumberOfProductsWithoutChangedItem = state.numberOfProducts - numericQuantity;
 
      return {
        ...state,
        //products: delete cloneDeep(state.products)[action.payload],
     //  ...state.products[action.payload.IndexToUpdate].Quantity =  action.payload.Quantity;
        //   products: state.products.filter((product) => {
        //     return product !== productToUpdate;
        // }),
    //  products: [...state.products, {[action.payload.IndexToUpdate]: productToUpdate}],
        products: action.payload.UpdatedProducts,
        totalprice: action.payload.UpdatedTotalPrice,
        numberOfProducts: parseInt(action.payload.UpdatedNumberOfProducts.toString())
     //   totalprice: totalPriceWithoutChangedItem + (productToUpdate.ProductPrice * action.payload.Quantity),
     //   numberOfProducts: state.numberOfProducts + action.payload.Quantity
      };

      case ShoppingListActions.UPDATE_QUANTITY_FAILED:
        return { ...state, ...action };

    default:
      return state;
  }


}
