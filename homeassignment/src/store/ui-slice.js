import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { 
    notification: null,
    deleteAllFavoriteVisible: false,
  },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    changeDeleteAllModal(state, action) {
      state.deleteAllFavoriteVisible = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;