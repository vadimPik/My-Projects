import { createSlice } from '@reduxjs/toolkit';
import { replaceAllItems } from './reducers/replaceAllItems';
import { addItems } from './reducers/addItems';
import { removeAllFavoriteItems } from './reducers/removeAllFavoriteItems';
import { toggleFavorites } from './reducers/toggleFavorites';
import { addRankValue } from './reducers/addRankValue';
import { changeDetailsWindowVisble } from './reducers/changeDetailsWindowVisble';
import { toggleHover } from './reducers/toggleHover';

// In this project i used "redux-toolkit"- it is a redux package for react that wrap the state and give a ability to write "normal" - without the ability to change the state wrongly.
//Documentation: https://redux-toolkit.js.org/introduction/getting-started

const itemSlice = createSlice({
    name: 'items',
    initialState: {
      items: []
    },
    reducers: {
      replaceAllItems,
      addItems,
      removeAllFavoriteItems,
      toggleFavorites,
      addRankValue,
      changeDetailsWindowVisble,
      toggleHover
    },
  });
  
  export const itemsActions = itemSlice.actions;
  
  export default itemSlice;
  