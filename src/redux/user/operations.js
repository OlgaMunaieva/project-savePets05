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

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (data, thunkAPI) => {
//     try {
//       const response = await addContactsApi(data);
//       return response;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

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
