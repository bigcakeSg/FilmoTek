export const MOVIE_LIST_LOADING = 'Movie List: loading';
export const MOVIE_LIST_SUCCESS = 'Movie List: success';
export const MOVIE_LIST_FAILURE = 'Movie List: failure';
export const MOVIE_LIST_ADD_MOVIE = 'Movie List: add movie';

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

export const movieLisAddMovie = (data) => ({
  type: MOVIE_LIST_ADD_MOVIE,
  payload: data
});
