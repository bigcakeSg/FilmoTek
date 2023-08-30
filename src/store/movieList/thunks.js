import axios from 'axios';
import {
  movieListLoading,
  movieListSuccess,
  movieListFailure,
  movieMiniInfosFailure,
  movieMiniInfosLoading,
  movieMiniInfosSuccess
} from './actions';

export const getMovieList = () => {
  return async (dispatch) => {
    try {
      dispatch(movieListLoading());

      const { data } = await axios.get('http://localhost:5000/movie/list');

      dispatch(movieListSuccess(data));
      // TODO: supprimer mini infos si id n'existe plus
    } catch (error) {
      dispatch(movieListFailure(error.message));
    }
  };
};

export const getMovieMiniInfo = (movieId) => {
  return async (dispatch) => {
    try {
      dispatch(movieMiniInfosLoading(movieId));

      const { data } = await axios.get(
        `http://localhost:5000/movie/mini-infos/${movieId}`
      );

      dispatch(movieMiniInfosSuccess(data));
    } catch (error) {
      dispatch(movieMiniInfosFailure(error, movieId));
    }
  };
};
