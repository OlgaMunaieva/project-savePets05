import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchUserInformation,
  addUserInformation,
  addUserAvatar,
  fetchUserPets,
  deleteUserPet,
  logoutPet,
} from './operations';
import { urlModify } from '../../components/user/userForm/utils/UrlModify';

const AVATAR_CLOUDINARY_URL =
  'https://res.cloudinary.com/dfvviqdic/image/upload/';

const userInitialState = {
  user: {
    userInfo: {},
    avatar: null,
    pets: [],
  },
  isLoading: false,
  error: null,
  // userError: null,
  // petError: null,
};

// const extraActions = [fetchContacts, addContact, deleteContact];
const extraActions = [
  fetchUserInformation,
  addUserInformation,
  addUserAvatar,
  fetchUserPets,
  deleteUserPet,
];

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

// const rejectedUserReducer = (state, action) => {
//   state.isLoading = false;
//   state.userError = action.payload;
// };

// const rejectedPetReducer = (state, action) => {
//   state.isLoading = false;
//   state.petError = action.payload;
// };

const fetchUserSuccessReducer = (state, action) => {
  // console.log('fetch');
  const { name, email, birthday, phone, city, avatarURL } = action.payload;
  state.user.userInfo = { name, email, birthday, phone, city };
  if (avatarURL) {
    state.user.avatar = urlModify(AVATAR_CLOUDINARY_URL, avatarURL);
  } else {
    state.user.avatar = avatarURL;
  }

  // state.isLoading = false;
  // state.userError = null;
  // state.user.pets = pets;
  // state.user = action.payload;
};

const addUserInfoSuccessReducer = (state, action) => {
  // console.log('Addaction', action.payload);
  state.user.userInfo = action.payload;
};

const addUserAvatarSuccessReducer = (state, action) => {
  // console.log('AddAvatar', action.payload);
  state.user.avatar = action.payload;
};

const fetchUserPetsSuccessReducer = (state, action) => {
  state.user.pets = action.payload;
  // state.isLoading = false;
  // state.petError = null;
};

const deleteUserPetSuccessReducer = (state, action) => {
  const index = state.user.pets.findIndex(pet => pet.id === action.payload);
  state.user.pets.splice(index, 1);
};

const logoutPetSuccessReducer = state => {
  state.user.userInfo = {};
  state.user.avatar = null;
  state.user.pets = [];
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchUserInformation.fulfilled, fetchUserSuccessReducer)
      .addCase(addUserInformation.fulfilled, addUserInfoSuccessReducer)
      .addCase(addUserAvatar.fulfilled, addUserAvatarSuccessReducer)
      .addCase(fetchUserPets.fulfilled, fetchUserPetsSuccessReducer)
      .addCase(deleteUserPet.fulfilled, deleteUserPetSuccessReducer)
      .addCase(logoutPet.fulfilled, logoutPetSuccessReducer)
      // .addCase(fetchUserInformation.rejected, rejectedUserReducer)
      // .addCase(fetchUserPets.rejected, rejectedPetReducer)
      .addMatcher(getActions(status.PENDING), pendingReducer)
      .addMatcher(getActions(status.REJECTED), rejectedReducer)
      .addMatcher(getActions(status.FULFILLED), fulfilledReducer);
  },
});

export const useReducer = userSlice.reducer;
