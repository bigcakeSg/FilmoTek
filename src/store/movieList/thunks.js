import axios from 'axios';
import {
  movieListLoading,
  movieListSuccess,
  movieListFailure
} from './actions';
import { apiHeaders } from '../../utils/configs';
import { movieList } from '../../mocks';

export const getMovieList = () => {
  return (dispatch) => {
    try {
      dispatch(movieListLoading());
      dispatch(movieListSuccess(movieList));
    } catch (error) {
      dispatch(movieListFailure(error.message));
    }
  };
};

export const getMovieMiniInfo = (movieId) => {
  return async (dispatch) => {
    const endPoints = [
      `https://moviesdatabase.p.rapidapi.com/titles/${movieId}`,
      `https://moviesdatabase.p.rapidapi.com/titles/${movieId}/aka`
    ];
    const [miniInfo, titles] = await Promise.all(
      endPoints.map((endPoint) =>
        axios.get(endPoint, {
          headers: apiHeaders
        })
      )
    );

    return { ...miniInfo.data.results, titles: titles.data.results };
  };
};
