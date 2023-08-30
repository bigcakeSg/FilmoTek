import axios from 'axios';
import {
  movieInfosLoading,
  movieInfosSuccess,
  movieInfosFailure
} from './actions';

import { apiHeaders } from '../../utils/configs';
import { selectMovieId } from './selectors';
import { getMovieList } from '../movieList/thunks';

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
        const { data } = await axios.get(
          `http://localhost:5000/movie/infos/${movieId}`
        );

        dispatch(movieInfosSuccess(data));
      }
    } catch (error) {
      dispatch(movieInfosFailure(error.message));
    }
  };
};

export const postMovieByImdbId = (movieId) => {
  return async (dispatch, getState) => {
    try {
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

      // Movie creation
      const movieParams = {
        imdbId: movieId,
        originalTitle: base_info.data.results.originalTitleText.text,
        regionalTitles: titles.data.results.map((title) => ({
          title: title?.title,
          region: title?.region
        })),
        picture: {
          url: base_info.data.results.primaryImage?.url,
          height: base_info.data.results.primaryImage?.height,
          width: base_info.data.results.primaryImage?.width
        },
        releaseDate: {
          year: base_info.data.results.releaseDate?.year,
          month: base_info.data.results.releaseDate?.month,
          day: base_info.data.results.releaseDate?.day
        },
        duration: base_info.data.results.runtime.seconds,
        plot: base_info.data.results.plot.plotText.plainText,
        genres: base_info.data.results.genres.genres.map((genre) => ({
          id: genre?.id,
          text: genre?.text
        })),
        directors:
          creators_directors_writers.data.results.directors[0].credits.map(
            (credit) => ({
              name: { id: credit.name.id, text: credit.name.nameText.text },
              attributes: credit?.attributes?.map((attr) => attr.text) || []
            })
          ),
        writers: creators_directors_writers.data.results.writers[0].credits.map(
          (credit) => ({
            name: { id: credit.name.id, text: credit.name.nameText.text },
            attributes: credit?.attributes?.map((attr) => attr.text) || []
          })
        ),
        casting: {
          principal: principalCast.data.results.principalCast[0].credits.map(
            (cast) => ({
              name: {
                id: cast.name.id,
                text: cast.name.nameText.text
              },
              characters: cast.characters?.map((char) => char.name),
              picture: {
                url: cast.name.primaryImage.url,
                height: cast.name.primaryImage.height,
                width: cast.name.primaryImage.width
              },
              attributes: cast?.attributes?.map((attr) => attr.text) || []
            })
          ),
          extended: extendedCast.data.results.cast.edges.map(({ node }) => ({
            name: {
              id: node.name.id,
              text: node.name.nameText.text
            },
            characters: node.characters?.map((char) => char.name),
            picture: {
              url: node.name.primaryImage?.url,
              height: node.name.primaryImage?.height,
              width: node.name.primaryImage?.width
            },
            attributes: node?.attributes?.map((attr) => attr.text) || []
          }))
        }
      };

      await axios.post(`http://localhost:5000/movie`, movieParams);

      dispatch(getMovieList());
    } catch (error) {
      console.log('ERROR', error);
    }
  };
};
