import axios from 'axios';
import {
  movieInfosLoading,
  movieInfosSuccess,
  movieInfosFailure
} from './actions';
import { movieList } from '../../mocks';
import { apiHeaders } from '../../utils/configs';

export const getMovieInfos = (movieId) => {
  return async (dispatch) => {
    try {
      dispatch(movieInfosLoading());

      const params = [
        'base_info',
        'principalCast',
        'extendedCast',
        'creators_directors_writers'
      ];

      const [
        base_info,
        principalCast,
        extendedCast,
        creators_directors_writers,
        titles
      ] = await Promise.all([
        ...params.map((param) =>
          axios.get(`https://moviesdatabase.p.rapidapi.com/titles/${movieId}`, {
            headers: apiHeaders,
            params: {
              info: param
            }
          })
        ),
        axios.get(
          `https://moviesdatabase.p.rapidapi.com/titles/${movieId}/aka`,
          {
            headers: apiHeaders
          }
        )
      ]);

      dispatch(
        movieInfosSuccess({
          id: movieId,
          base_info: base_info.data.results,
          principalCast: principalCast.data.results,
          extendedCast: extendedCast.data.results,
          creators_directors_writers: creators_directors_writers.data.results,
          titles: titles.data.results
        })
      );
    } catch (error) {
      dispatch(movieInfosFailure(error.message));
    }
  };
};
