import { createSlice } from '@reduxjs/toolkit';
import { fetchNotices, fetchByCategory } from './operations';

export const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    status: 0,
  },

  extraReducers: {
    // fetch all
    [fetchNotices.pending](state, action) {
      state.isLoading = true;
    },
    [fetchNotices.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchNotices.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // fetch category
    [fetchByCategory.pending](state, action) {
      state.isLoading = true;
    },
    [fetchByCategory.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchByCategory.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
