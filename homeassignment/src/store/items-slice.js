import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
    name: 'items',
    initialState: {
      items: []
    },
    reducers: {
      replaceAllItems(state, action) {
        state.items = action.payload.items;
      },
      addItemToFavorites(state, action) {
        const favoriteItemId = action.payload;
        const existingItem = state.items.find((item) => item.id === favoriteItemId);
        if (existingItem) {
          existingItem.isFavorite = true;
        } else {
        }
      },
      removeItemFromFavorites(state, action) {
        const id = action.payload;
        const existingItem = state.items.find((item) => item.id === id);
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {

        }
      },
    },
  });
  
  export const itemsActions = itemSlice.actions;
  
  export default itemSlice;
  