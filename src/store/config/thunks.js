import { configFailure, configLoading, configSuccess } from './actions';

export const getConfig = () => {
  return async (dispatch) => {
    try {
      dispatch(configLoading());

      dispatch(
        configSuccess({
          rapidApiHeader: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
          },
          region: 'FR'
        })
      );
    } catch (error) {
      dispatch(configFailure(error.message));
    }
  };
};
