import { configureStore } from '@reduxjs/toolkit';

import itemSlice from './items-slice';
import uiSlice from './ui-slice';
import paginationSlice from './pagination-slice';

const store = configureStore({
  reducer: { beers: itemSlice.reducer, ui: uiSlice.reducer, pagination: paginationSlice.reducer },
});

export default store;