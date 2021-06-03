import { createSlice } from '@reduxjs/toolkit';
import { showNotification } from './reducers/showNotification';
import { changeDeleteAllModal } from './reducers/changeDeleteAllModal';
import { changSearchValue } from './reducers/changSearchValue';
import { changeSearchEmptyWindowVisble } from './reducers/changeSearchEmptyWindowVisble';
 
// In this project i used "redux-toolkit"- it is a redux package for react that wrap the state and give a ability to write "normal" - without the ability to change the state wrongly.
//Documentation: https://redux-toolkit.js.org/introduction/getting-started

const uiSlice = createSlice({
  name: 'ui',
  initialState: { 
    notification: null,
    deleteAllFavoriteVisible: false,
    searchValue: '',
    isSearchEmptyModalVisible: false
  },
  reducers: {
    showNotification,
    changeDeleteAllModal,
    changSearchValue,
    changeSearchEmptyWindowVisble
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;