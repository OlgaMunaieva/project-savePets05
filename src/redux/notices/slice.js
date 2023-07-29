import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchByCategory,
  putFavorite,
  fetchFavorite,
} from './operations';

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    status: 0,
  },

  extraReducers: builder => {
    builder
      // fetch all
      .addCase(fetchNotices.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchNotices.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        // state.items = payload;
      })
      .addCase(fetchNotices.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // fetch category
      .addCase(fetchByCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchByCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchByCategory.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // fetch favorite
      .addCase(fetchFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // put favorite
      .addCase(putFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(putFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(notice => notice.id === payload.id);
        state.items[index].favorite = payload.favorite;
      })
      .addCase(putFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const noticesSliceReducer = noticesSlice.reducer;
