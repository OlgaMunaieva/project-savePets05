import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://project-savepets05-be.onrender.com';

export const submitForm = createAsyncThunk(
  'addPet/submitForm',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/notices', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
