import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token?.access;
  state.isLoggedIn = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const handleLogOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRefreshUserFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logIn.fulfilled, handleFulfilled)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const { clearError } = authSlice.actions;

export const authReducer = authSlice.reducer;
