import { configureStore } from '@reduxjs/toolkit';

import authSlice from './auth/slice.js';
import servicesSlice from './services/slice.js';
import favoritesSlice from './favorites/slice.js';

const store = configureStore({
  reducer: {
    auth: authSlice,
    services: servicesSlice,
    favorites: favoritesSlice,
  },
});

export default store;
