import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { 
    notification: null,
    deleteAllFavoriteVisible: false,
    needExecuteSearch: false,
    isSearchEmptyModalVisible: false
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
    changSearchState(state, action) {
      state.needExecuteSearch = action.payload;
    },
    changeSearchEmptyWindowVisble(state, action) {
      state.isSearchEmptyModalVisible = action.payload;
    }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;