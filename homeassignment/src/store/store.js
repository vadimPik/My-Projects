import { configureStore } from '@reduxjs/toolkit';

import itemSlice from './items-slice';
import uiSlice from './ui-slice';
import paginationSlice from './pagination-slice';

// In this project i used "redux-toolkit"- it is a redux package for react that wrap the state and give a ability to write "normal" - without the ability to change the state wrongly.
//Documentation: https://redux-toolkit.js.org/introduction/getting-started

const store = configureStore({
  reducer: { beers: itemSlice.reducer, ui: uiSlice.reducer, pagination: paginationSlice.reducer },
});

export default store;