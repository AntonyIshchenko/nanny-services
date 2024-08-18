import { createSelector } from '@reduxjs/toolkit';

const isLoading = state => state.favorites.isLoading;
const error = state => state.favorites.error;
const nannies = state => state.favorites.nannies;

const idList = createSelector([nannies], nannies =>
  nannies.map(item => item.id)
);

export default {
  isLoading,
  error,
  nannies,
  idList,
};
