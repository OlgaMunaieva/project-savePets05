import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchUserInformation,
  addUserInformation,
  addUserAvatar,
  // fetchUserPets,
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
  isSubmitting: false,
};

const extraActions = [
  fetchUserInformation,
  addUserInformation,
  addUserAvatar,
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

const fetchUserInfoSuccessReducer = (state, action) => {
  const { name, email, birthday, phone, city, avatarURL } = action.payload.user;

  state.user.userInfo = { name, email, birthday, phone, city };

  if (avatarURL) {
    state.user.avatar = urlModify(AVATAR_CLOUDINARY_URL, avatarURL);
  } else {
    state.user.avatar = avatarURL;
  }

  state.user.pets = action.payload.pet;
};

const addUserInfoSuccessReducer = (state, action) => {
  state.user.userInfo = action.payload;
};

const addUserAvatarSuccessReducer = (state, action) => {
  console.log(
    'payloadavatar',
    urlModify(AVATAR_CLOUDINARY_URL, action.payload)
  );
  state.user.avatar = urlModify(AVATAR_CLOUDINARY_URL, action.payload);
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
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchUserInformation.fulfilled, fetchUserInfoSuccessReducer)
      .addCase(addUserInformation.fulfilled, addUserInfoSuccessReducer)
      .addCase(addUserAvatar.fulfilled, addUserAvatarSuccessReducer)
      .addCase(deleteUserPet.fulfilled, deleteUserPetSuccessReducer)
      .addCase(logoutPet.fulfilled, logoutPetSuccessReducer)
      .addMatcher(getActions(status.PENDING), pendingReducer)
      .addMatcher(getActions(status.REJECTED), rejectedReducer)
      .addMatcher(getActions(status.FULFILLED), fulfilledReducer);
  },
});

export const useReducer = userSlice.reducer;
