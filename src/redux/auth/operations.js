import { createAsyncThunk } from '@reduxjs/toolkit';

import { auth } from '../../firebase/init';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export default { register, login, logout };
