import {AppRootState} from '../../../reducers';

export const totalPriceSelector = (state: AppRootState) => state.shoppingList.totalprice;
export const shoppingListProductsSelector = (state: AppRootState) => state.shoppingList.products;
export const shoppingListIDSelector = (state: AppRootState) => state.shoppingList.ShoppingListID;
export const numberOfProductsSelector = (state: AppRootState) => state.shoppingList.numberOfProducts;
