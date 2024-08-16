import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nannies: [],
  lastId: '',
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'favorites',
  initialState,
  //   extraReducers: builder => {
  //     builder.addCase();
  //   },
});

const reducer = slice.reducer;

export default reducer;
