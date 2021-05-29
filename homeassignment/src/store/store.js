import { configureStore } from '@reduxjs/toolkit';

import itemSlice from './items-slice';
import notificationSlice from './notification-slice';

const store = configureStore({
  reducer: { items: itemSlice.reducer, notification: notificationSlice.reducer },
});

export default store;