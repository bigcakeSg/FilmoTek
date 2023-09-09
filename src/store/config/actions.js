export const CONFIG_LOADING = 'Config: loading';
export const CONFIG_SUCCESS = 'Config: success';
export const CONFIG_FAILURE = 'Config: failure';

export const configLoading = () => ({
  type: CONFIG_LOADING
});

export const configSuccess = (data) => ({
  type: CONFIG_SUCCESS,
  payload: data
});

export const configFailure = (error) => ({
  type: CONFIG_FAILURE,
  error
});
