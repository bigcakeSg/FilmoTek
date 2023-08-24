import axios from 'axios';
import {
  movieListLoading,
  movieListSuccess,
  movieListFailure,
  movieMiniInfosFailure,
  movieMiniInfosLoading,
  movieMiniInfosSuccess
} from './actions';
import { apiHeaders } from '../../utils/configs';
import { movieList } from '../../mocks';
import { selectMovieMiniInfosData } from './selectors';

export const getMovieList = () => {
  return (dispatch) => {
    try {
      dispatch(movieListLoading());
      dispatch(movieListSuccess(movieList));
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

      dispatch(
        movieMiniInfosSuccess({
          ...miniInfo.data.results,
          titles: titles.data.results
        })
      );
    } catch (error) {
      dispatch(movieMiniInfosFailure(error, movieId));
    }
  };
};
