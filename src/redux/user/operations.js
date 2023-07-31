import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://project-savepets05-be.onrender.com';

export const fetchUserInformation = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addUserInformation = createAsyncThunk(
  'user/addUserInfo',
  async (data, thunkAPI) => {
    try {
      console.log('responsedata', data);
      await axios.patch('/api/users/info', data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addUserAvatar = createAsyncThunk(
  'user/addUserAvatar',
  async (data, thunkAPI) => {
    try {
      // console.log('aadduseravatar', data);
      const formData = new FormData();
      formData.append('avatar', data);
      const response = await axios.patch('/api/users/avatars', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      return response.data.avatarURL;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUserPets = createAsyncThunk(
  'user/fetchPets',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/pet');
      console.log('vf', response.data.pet);
      return response.data.pet;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, thunkAPI) => {
//     try {
//       const response = await deleteContactsApi(id);
//       return response;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
