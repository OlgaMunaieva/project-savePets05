import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchByCategory,
  putFavorite,
  fetchFavorite,
  fetchMyPets,
  delMyPetsById,
} from './operations';

const noticesSlice = createSlice({
  name: 'notices',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    status: 0,
    totalPages: null,
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
      })
      .addCase(fetchNotices.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // fetch category
      .addCase(fetchByCategory.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchByCategory.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items = payload.notice;
        state.totalPages = payload.total;

        state.isLoading = false;
      })
      .addCase(fetchByCategory.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.items = [];
      })
      // fetch favorite
      .addCase(fetchFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.notice;
        state.totalPages = payload.total;
      })
      .addCase(fetchFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // put favorite
      .addCase(putFavorite.pending, state => {
        state.isLoading = false;
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
      })
      // fetch fetchMyPets
      .addCase(fetchMyPets.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchMyPets.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload.notice;
        state.totalPages = payload.total;
      })
      .addCase(fetchMyPets.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // put delMyPetsById
      .addCase(delMyPetsById.pending, state => {
        state.isLoading = true;
      })
      .addCase(delMyPetsById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(delMyPetsById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const noticesSliceReducer = noticesSlice.reducer;
