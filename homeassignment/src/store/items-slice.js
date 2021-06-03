import { createSlice } from '@reduxjs/toolkit';

// In this project i used "redux-toolkit"- it is a redux package for react that wrap the state and give a ability to write "normal" - without the ability to change the state wrongly.
//Documentation: https://redux-toolkit.js.org/introduction/getting-started

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
      },
      removeAllFavoriteItems(state, action) {
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
      }
    },
  });
  
  export const itemsActions = itemSlice.actions;
  
  export default itemSlice;
  