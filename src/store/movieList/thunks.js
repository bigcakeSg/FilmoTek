import axios from 'axios';
import {
  movieListLoading,
  movieListSuccess,
  movieMiniInfosLoading,
  movieMiniInfosSuccess,
  movieTitlesSuccess
} from './actions';
import { movieList } from '../../mocks';

const headers = {
  'X-RapidAPI-Key': 'c3906cc624mshb325ef5eff66c21p111ea4jsn5475587a7b03',
  'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
};

export const getMovieList = () => {
  return (dispatch) => {
    dispatch(movieListLoading());
    dispatch(movieListSuccess(movieList));
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
          headers
        })
      )
    );

    return { ...miniInfo.data.results, titles: titles.data.results };
  };
};
