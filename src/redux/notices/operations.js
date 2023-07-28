import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

// import { selectToken, selectUser } from 'redux/auth/authSelectors';
// import { selectToken } from 'redux/auth/authSelectors';

axios.defaults.baseURL = 'https://project-savepets05-be.onrender.com';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

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
        `/api/notices/?${searchParams.toString()}`
      );
      return response.data.notice;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue('');
    }
  }
);
