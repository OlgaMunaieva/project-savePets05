import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';
// import { selectToken } from 'redux/auth/authSelectors';

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
        `/api/notices/category/?${searchParams.toString()}`
      );
      console.log(response);
      return response.data.notice;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue('');
    }
  }
);

// export const fetchById = createAsyncThunk(
//   'notices/fetchNoticeById',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.get(`/api/notices/notice/${id}`);
//       return response.data;
//     } catch (error) {
//       toast.error(error.message);
//       return thunkAPI.rejectWithValue('');
//     }
//   }
// );

export const fetchFavorite = createAsyncThunk(
  'notices/category',
  async (params, thunkAPI) => {
    const searchParams = new URLSearchParams(params);
    searchParams.forEach((value, key) => {
      if (value === '') {
        searchParams.delete(key);
      }
    });
    try {
      const response = await axios.get(`/api/notices/favorite`);

      console.log(response);
      return response.data.notice;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue('');
    }
  }
);

// export const fetchFavorite = createAsyncThunk(
//   'notices/fetchFavorite',
//   async (_, thunkAPI) => {
//     const token = selectToken(thunkAPI.getState());
//     if (!token) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }
//     try {
//       const response = await axios.get(`/api/notices/favorite`);
//       console.log(response);
//       return response.data.notice;
//     } catch (error) {
//       toast.error(error.message);
//       return thunkAPI.rejectWithValue('');
//     }
//   }
// );

export const putFavorite = createAsyncThunk(
  'notices/putFavorite',
  async (id, thunkAPI) => {
    console.log(id);
    try {
      const { data } = await axios.patch(`api/notices/favorite/${id}`);
      console.log(data);
      return data.result;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue('');
    }
  }
);
