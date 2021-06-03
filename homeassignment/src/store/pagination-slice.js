import { createSlice } from '@reduxjs/toolkit';


const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
      pageNumber: 1,
      loading: false,
     // error: false,
      hasMore: false
    },
    reducers: {
      setLoading(state, action) {
        state.loading = action.payload;
      },
      setPage(state, action) {
        state.pageNumber = state.pageNumber + 1;
      },
      setHasMore(state, action) {
        state.hasMore = action.payload;
      },
    },
  });
  
  export const paginationActions = paginationSlice.actions;
  
  export default paginationSlice;
  