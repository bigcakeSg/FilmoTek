import {
  movieInfosLoading,
  movieInfosSuccess,
  movieInfosFailure
} from './actions';

import { selectMovieId } from './selectors';
import { axiosInst } from '../../axiosConfig';

// Movie infos importation
export const getMovieInfos = (movieId) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();

      if (selectMovieId(state) !== movieId) {
        dispatch(movieInfosLoading());

        const { data } = await axiosInst.get(`movie/${movieId}/infos`);

        dispatch(movieInfosSuccess(data));
      }
    } catch (error) {
      const message = error?.response?.data?.message || error.message;
      dispatch(movieInfosFailure(message));
    }
  };
};
