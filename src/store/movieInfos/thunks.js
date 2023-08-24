import axios from 'axios';
import {
  movieInfosLoading,
  movieInfosSuccess,
  movieInfosFailure
} from './actions';

import { apiHeaders } from '../../utils/configs';
import {
  baseInfoDto,
  creatorsDto,
  extendedCastDto,
  principalCastDto
} from './dto';
import { selectMovieId } from './selectors';

export const getMovieInfos = (movieId) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();

      if (selectMovieId(state) !== movieId) {
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
            axios.get(
              `https://moviesdatabase.p.rapidapi.com/titles/${movieId}`,
              {
                headers: apiHeaders,
                params: {
                  info: param
                }
              }
            )
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
            base_info: baseInfoDto(base_info.data.results),
            principalCast: principalCastDto(principalCast.data.results),
            extendedCast: extendedCastDto(extendedCast.data.results),
            creators_directors_writers: creatorsDto(
              creators_directors_writers.data.results
            ),
            titles: titles.data.results
          })
        );
      }
    } catch (error) {
      dispatch(movieInfosFailure(error.message));
    }
  };
};
