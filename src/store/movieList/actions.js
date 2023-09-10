export const MOVIE_LIST_LOADING = 'Movie List: loading';
export const MOVIE_LIST_SUCCESS = 'Movie List: success';
export const MOVIE_LIST_FAILURE = 'Movie List: failure';
export const MOVIE_LIST_ADD_MOVIE_SUCCESS = 'Movie List: add movie success';
export const MOVIE_LIST_ADD_MOVIE_FAILURE = 'Movie List: add movie failure';
export const MOVIE_LIST_REMOVE_MOVIE_SUCCESS =
  'Movie List: remove movie success';
export const MOVIE_LIST_REMOVE_MOVIE_FAILURE =
  'Movie List: remove movie failure';
export const MOVIE_LIST_UPDATE_MOVIE_SUCCESS =
  'Movie List: update movie success';
export const MOVIE_LIST_UPDATE_MOVIE_FAILURE =
  'Movie List: update movie failure';

export const movieListLoading = () => ({
  type: MOVIE_LIST_LOADING
});

export const movieListSuccess = (data) => ({
  type: MOVIE_LIST_SUCCESS,
  payload: data
});

export const movieListFailure = (error) => ({
  type: MOVIE_LIST_FAILURE,
  error
});

export const movieLisAddMovieSuccess = (data) => ({
  type: MOVIE_LIST_ADD_MOVIE_SUCCESS,
  payload: data
});

export const movieLisAddMovieFailure = (error) => ({
  type: MOVIE_LIST_ADD_MOVIE_FAILURE,
  error
});

export const movieLisRemoveMovieSuccess = (data) => ({
  type: MOVIE_LIST_REMOVE_MOVIE_SUCCESS,
  payload: data
});

export const movieLisRemoveMovieFailure = (error) => ({
  type: MOVIE_LIST_REMOVE_MOVIE_FAILURE,
  error
});

export const movieLisUpdateMovieSuccess = (data) => ({
  type: MOVIE_LIST_UPDATE_MOVIE_SUCCESS,
  payload: data
});

export const movieLisUpdateMovieFailure = (error) => ({
  type: MOVIE_LIST_UPDATE_MOVIE_FAILURE,
  error
});
