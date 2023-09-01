import axios from 'axios';
import {
  movieListLoading,
  movieListSuccess,
  movieListFailure
} from './actions';

export const getMovieList = () => {
  return async (dispatch) => {
    try {
      dispatch(movieListLoading());

      const { data } = await axios.get('http://localhost:5000/movie/list');

      dispatch(movieListSuccess(data));
    } catch (error) {
      dispatch(movieListFailure(error.message));
    }
  };
};

export const getMovieMiniInfo = (movieId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/movie/mini-infos/${movieId}`
      );

      return data;
    } catch (error) {
      //
    }
  };
};
