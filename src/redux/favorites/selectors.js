const isLoading = state => state.favorites.isLoading;
const error = state => state.favorites.error;
const nannies = state => state.favorites.nannies;
const lastId = state => state.favorites.lastId;

export default {
  isLoading,
  error,
  nannies,
  lastId,
};
