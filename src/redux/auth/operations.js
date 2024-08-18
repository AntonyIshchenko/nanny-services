import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

import { auth } from '../../firebase/init.js';

const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      thunkAPI.dispatch(updateName(name));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const updateName = createAsyncThunk(
  'auth/updateName',
  async (name, thunkAPI) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      return name;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const getTheme = createAsyncThunk('auth/updateTheme', async (_, thunkAPI) => {
  try {
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const updateTheme = createAsyncThunk(
  'auth/updateTheme',
  async (_, thunkAPI) => {
    try {
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const loginSync = createAction('auth/loginSync');
const logoutSync = createAction('auth/logoutSync');

export default {
  register,
  login,
  loginSync,
  logout,
  logoutSync,
  updateName,
  getTheme,
  updateTheme,
};
