const isLoading = state => state.services.isLoading;
const error = state => state.services.error;
const nannies = state => state.services.nannies;
const lastId = state => state.services.lastId;
const isEnd = state => state.services.isEnd;

export default {
  isLoading,
  error,
  nannies,
  lastId,
  isEnd,
};
