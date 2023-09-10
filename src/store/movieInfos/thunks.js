import axios from 'axios';
import {
  movieInfosLoading,
  movieInfosSuccess,
  movieInfosFailure
} from './actions';

import { selectMovieId } from './selectors';

// Movie infos importation
export const getMovieInfos = (movieId) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();

      if (selectMovieId(state) !== movieId) {
        dispatch(movieInfosLoading());

        const { data } = await axios.get(
          `http://localhost:5000/movie/${movieId}/infos`
        );

        dispatch(movieInfosSuccess(data));
      }
    } catch (error) {
      dispatch(movieInfosFailure(error.message));
    }
  };
};
