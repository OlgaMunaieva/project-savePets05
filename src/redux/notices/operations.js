import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://project-savepets05-be.onrender.com';

export const fetchNotices = createAsyncThunk(
  'notices/fetchSell',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/notices');
      return response.data.notice;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchByCategory = createAsyncThunk(
  'notices/category',
  async (params, thunkAPI) => {
    const searchParams = new URLSearchParams(params);

    searchParams.forEach((value, key) => {
      if (value === '') {
        searchParams.delete(key);
      }
    });
    try {
      const response = await axios.get(
        `/api/notices/category/?${searchParams.toString()}`
      );

      return response.data;
    } catch (error) {
      // toast.error(error.message);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const fetchById = createAsyncThunk(
  'notices/fetchNoticeById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/api/notices/notice/${id}`);
      return response.data;
    } catch (error) {
      // toast.error(error.message);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const fetchFavorite = createAsyncThunk(
  'notices/favorite',
  async (params, thunkAPI) => {
    const searchParams = new URLSearchParams(params);

    searchParams.forEach((value, key) => {
      if (value === '') {
        searchParams.delete(key);
      }
    });
    try {
      const response = await axios.get(
        `/api/notices/favorite?${searchParams.toString()}`
      );
      return response.data;
    } catch (error) {
      // toast.error(error.message);
      return thunkAPI.rejectWithValue('');
    }
  }
);

export const putFavorite = createAsyncThunk(
  'notices/putFavorite',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.patch(`api/notices/favorite/${id}`);
      return data;
    } catch (error) {
      // toast.error(error.message);
      return thunkAPI.rejectWithValue('');
    }
  }
);
export const fetchMyPets = createAsyncThunk(
  'notices/fetchMyPets',
  async (params, thunkAPI) => {
    const searchParams = new URLSearchParams(params);

    searchParams.forEach((value, key) => {
      if (value === '') {
        searchParams.delete(key);
      }
    });
    try {
      const response = await axios.get(
        `/api/notices/myads?${searchParams.toString()}`
      );
      return response.data;
    } catch (error) {
      // toast.error(error.message);
      return thunkAPI.rejectWithValue('');
    }
  }
);
export const delMyPetsById = createAsyncThunk(
  'notices/delMyPetsById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/notices/${id}`);
      console.log('myads', response);
      return response.data.notice;
    } catch (error) {
      // toast.error(error.message);
      return thunkAPI.rejectWithValue('');
    }
  }
);
