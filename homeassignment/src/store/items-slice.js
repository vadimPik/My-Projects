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
      addItems(state, action) {
        state.items = state.items.concat(action.payload.items);
       // state.items = [...state.items, action.payload.items];
      },
      removeAllFavoriteItems(state, action) {
        // state.items = state.items.filter(item => {item.isFavorite = false;
        //                                          item.Rank = ''
        //                                          item.isHover = false; });
        state.items.map(item => {item.isFavorite = false;
                                item.Rank = ''
                                item.isHover = false; });
      },

      toggleFavorites(state, action) {
        const favoriteItemId = action.payload;
        const existingItem = state.items.find((item) => item.id === favoriteItemId);
        if (existingItem) {
          existingItem.isFavorite = !existingItem.isFavorite;
          existingItem.Rank = '';
          existingItem.isHover = !existingItem.isHover;
        } else {
        }
      },
      addRankValue(state, action) {
        const favoriteItemId = action.payload.id;
        const existingItem = state.items.find((item) => item.id === favoriteItemId);
        if (existingItem) {
          existingItem.Rank = action.payload.rankValue;
        } else {
        }
      },
      changeDetailsWindowVisble(state, action) {
        const favoriteItemId = action.payload.id;
        const existingItem = state.items.find((item) => item.id === favoriteItemId);
        if (existingItem) {
          existingItem.isDetailsModalVisible = action.payload.isVisible;
        } else {
        }
      },
      toggleHover(state, action) {
        const favoriteItemId = action.payload;
        const existingItem = state.items.find((item) => item.id === favoriteItemId);
        if (existingItem) {
          existingItem.isHover = !existingItem.isHover;
        } else {
        }
      },
      // removeItemFromFavorites(state, action) {
      //   const id = action.payload;
      //   const existingItem = state.items.find((item) => item.id === id);
      //   if (existingItem.quantity === 1) {
      //     state.items = state.items.filter((item) => item.id !== id);
      //   } else {

      //   }
      // },
    },
  });
  
  export const itemsActions = itemSlice.actions;
  
  export default itemSlice;
  