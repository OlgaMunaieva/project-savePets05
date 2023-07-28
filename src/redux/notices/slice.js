import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchByCategory,
  putFavorite,
  fetchFavorite,
} from './operations';

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
    // fetch favorite
    [fetchFavorite.pending](state, action) {
      state.isLoading = true;
    },
    [fetchFavorite.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchFavorite.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
      for (let i = 0; i < state.items.length; ++i) {
        if (state.items[i]._id === action.payload._id) {
          state.items[i] = action.payload;
          break;
        }
      }
    },
    // put favorite
    [putFavorite.pending](state, action) {
      state.isLoading = true;
    },
    [putFavorite.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // console.log(state);
    },
    [putFavorite.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
