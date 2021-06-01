import { configureStore } from '@reduxjs/toolkit';

import itemSlice from './items-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: { beers: itemSlice.reducer, ui: uiSlice.reducer },
});

export default store;