import { createSlice } from '@reduxjs/toolkit';
import { submitForm } from './addPetOperations';

const initialState = {
  formSubmitted: false,
  error: null,
};

const handleFulfilled = (state, action) => {
  state.formSubmitted = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.formSubmitted = false;
  state.error = action.payload;
};

const addPetSlice = createSlice({
  name: 'addPet',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(submitForm.fulfilled, handleFulfilled)
      .addCase(submitForm.rejected, handleRejected);
  },
});

export const addPetReducer = addPetSlice.reducer;
