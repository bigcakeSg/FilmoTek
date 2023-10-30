import { configFailure, configLoading, configSuccess } from './actions';
import { axiosInst } from '../../axiosConfig';

export const getConfig = () => {
  return async (dispatch) => {
    try {
      dispatch(configLoading());

      const { data } = await axiosInst.get('config');

      dispatch(configSuccess(data[0]));
    } catch (error) {
      dispatch(configFailure(error.message));
    }
  };
};
