import { createSlice } from '@reduxjs/toolkit';
import { setLoading } from  './reducers/setLoading';
import { setPage }  from  './reducers/setPage';
import { setHasMore } from  './reducers/setHasMore';

// In this project i used "redux-toolkit"- it is a redux package for react that wrap the state and give a ability to write "normal" - without the ability to change the state wrongly.
//Documentation: https://redux-toolkit.js.org/introduction/getting-started

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
      pageNumber: 1,
      loading: false,
      hasMore: false
    },
    reducers: {
      setLoading,
      setPage,
      setHasMore
    },
  });
  
  export const paginationActions = paginationSlice.actions;
  
  export default paginationSlice;
  