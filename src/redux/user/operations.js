import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://project-savepets05-be.onrender.com';

export const fetchUserInformation = createAsyncThunk(
  'user/fetchUser',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/pet');
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

export const deleteUserPet = createAsyncThunk(
  'contacts/deleteUserPet',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/pet/${id}`);
      return response.data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logoutPet = createAsyncThunk(
  'contacts/logoutPet',
  async (_, thunkAPI) => {
    try {
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
