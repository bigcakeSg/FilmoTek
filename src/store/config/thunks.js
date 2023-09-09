import axios from 'axios';
import { configFailure, configLoading, configSuccess } from './actions';

export const getConfig = () => {
  return async (dispatch) => {
    try {
      dispatch(configLoading());

      const { data } = await axios.get('http://localhost:5000/config');

      dispatch(configSuccess(data[0]));
    } catch (error) {
      dispatch(configFailure(error.message));
    }
  };
};
