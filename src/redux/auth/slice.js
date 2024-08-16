import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLogged: false,
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  //   extraReducers: builder => {
  //     builder.addCase();
  //   },
});

const reducer = slice.reducer;

export default reducer;
