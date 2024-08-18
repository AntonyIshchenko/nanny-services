const isLoading = state => state.services.isLoading;
const error = state => state.services.error;
const user = state => state.services.user;
const isLogged = state => state.auth.isLogged;
const theme = state => state.auth.theme;

export default {
  isLoading,
  error,
  user,
  theme,
  isLogged,
};
