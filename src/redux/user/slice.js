import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchUserInformation } from './operations';

const userInitialState = {
  user: {},
  isLoading: false,
  error: null,
};

// const extraActions = [fetchContacts, addContact, deleteContact];
const extraActions = [fetchUserInformation];

const status = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const pendingReducer = state => {
  state.isLoading = true;
};

const fulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchUserSuccessReducer = (state, action) => {
  state.user = action.payload;
};

// const addContactSuccessReducer = (state, action) => {
//   state.items.push(action.payload);
// };

// const deleteContactSuccessReducer = (state, action) => {
//   const index = state.items.findIndex(
//     contact => contact.id === action.payload.id
//   );
//   state.items.splice(index, 1);
// };

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchUserInformation.fulfilled, fetchUserSuccessReducer)
      //   .addCase(addContact.fulfilled, addContactSuccessReducer)
      //   .addCase(deleteContact.fulfilled, deleteContactSuccessReducer)
      .addMatcher(getActions(status.PENDING), pendingReducer)
      .addMatcher(getActions(status.REJECTED), rejectedReducer)
      .addMatcher(getActions(status.FULFILLED), fulfilledReducer);
  },
});

export const useReducer = userSlice.reducer;
