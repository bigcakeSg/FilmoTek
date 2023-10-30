import axios from 'axios';
import {
  movieListLoading,
  movieListSuccess,
  movieListFailure,
  movieLisAddMovieSuccess,
  movieLisAddMovieFailure,
  movieLisRemoveMovieSuccess,
  movieLisRemoveMovieFailure,
  movieLisUpdateMovieSuccess,
  movieLisUpdateMovieFailure
} from './actions';
import { patchSupports } from '../videoSupports/thunks';

export const getMovieList = () => {
  return async (dispatch) => {
    try {
      dispatch(movieListLoading());

      const { data } = await axios.get(`http://localhost:5000/movie/list`);

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
        `http://localhost:5000/movie/${movieId}/mini-infos`
      );

      return data;
    } catch (error) {
      //
    }
  };
};

// Movie creation
export const postMovieByImdbId = (movieId) => {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const apiHeader = state.config.data.rapidApiHeader;

      const params = [
        'base_info',
        'principalCast',
        'extendedCast',
        'creators_directors_writers'
      ];

      // Fetch movie infos from extern API
      const [
        base_info,
        principalCast,
        extendedCast,
        creators_directors_writers,
        titles
      ] = await Promise.all([
        ...params.map((param) =>
          axios.get(`https://moviesdatabase.p.rapidapi.com/titles/${movieId}`, {
            headers: apiHeader,
            params: {
              info: param
            }
          })
        ),
        axios.get(
          `https://moviesdatabase.p.rapidapi.com/titles/${movieId}/aka`,
          {
            headers: apiHeader
          }
        )
      ]);

      if (!base_info.data.results)
        return { severity: 'error', message: 'IMDB id does not exist' };

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
          year: base_info.data.results.releaseYear?.year || null,
          month: base_info.data.results.releaseDate?.month,
          day: base_info.data.results.releaseDate?.day
        },
        duration: base_info.data.results.runtime?.seconds,
        plot: base_info.data.results.plot?.plotText?.plainText,
        genres:
          base_info.data.results.genres?.genres.map((genre) => ({
            id: genre?.id,
            text: genre?.text
          })) || [],
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
                text: cast.name.nameText.text,
                picture: {
                  url: cast.name?.primaryImage?.url,
                  height: cast.name?.primaryImage?.height,
                  width: cast.name?.primaryImage?.width
                }
              },
              characters: cast.characters?.map((char) => char.name) || [],
              attributes: cast?.attributes?.map((attr) => attr.text) || []
            })
          ),
          extended: extendedCast.data.results.cast.edges.map(({ node }) => ({
            name: {
              id: node.name.id,
              text: node.name.nameText.text,
              picture: {
                url: node.name?.primaryImage?.url,
                height: node.name?.primaryImage?.height,
                width: node.name?.primaryImage?.width
              }
            },
            characters: node.characters?.map((char) => char.name) || [],
            attributes: node?.attributes?.map((attr) => attr.text) || []
          }))
        },
        seen: false
      };

      const { data, status } = await axios.post(
        `http://localhost:5000/movie`,
        movieParams
      );

      if (status === 200) {
        return { severity: 'warning', message: 'Movie already exists!' };
      } else if (status === 201) {
        dispatch(
          movieLisAddMovieSuccess({
            _id: data._id,
            imdbId: movieId,
            originalTitle: movieParams.originalTitle,
            regionalTitles: movieParams.regionalTitles,
            picture: movieParams.picture,
            releaseDate: movieParams.releaseDate,
            directors: movieParams.directors,
            seen: false
          })
        );

        return { severity: 'success', message: 'Movie created!' };
      } else throw new Error(data.message);
    } catch (error) {
      dispatch(movieLisAddMovieFailure(error));
      return { severity: 'error', message: error };
    }
  };
};

// Movie list creation
// export const postMovieListByImdbId = () => {
//   return async (dispatch, getState) => {
//     try {
//       const movies = getState().movieList.data.map((movie) => movie.imdbId);
//       for (const movie of movieList) {
//         if (!movies.includes(movie)) await dispatch(postMovieByImdbId(movie));
//       }
//     } catch (error) {
//       dispatch(movieInfosFailure(error.message));
//     }
//   };
// };

// Movie deletion
export const deleteMovieById = (movieId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:5000/movie/${movieId}`);
      await dispatch(patchSupports(movieId, []));

      dispatch(movieLisRemoveMovieSuccess(movieId));
      return { severity: 'success', message: 'Movie deleted!' };
    } catch (error) {
      dispatch(movieLisRemoveMovieFailure(error));
      return { severity: 'error', message: error };
    }
  };
};

// Movie update seen
export const updateSeenMovie = (movieId, seen) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:5000/movie/${movieId}/seen`,
        { seen }
      );

      dispatch(movieLisUpdateMovieSuccess(data));

      return { severity: 'success', message: 'Movie updated!' };
    } catch (error) {
      dispatch(movieLisUpdateMovieFailure(error));
      return { severity: 'error', message: error };
    }
  };
};
