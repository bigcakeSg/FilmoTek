export const MOVIE_LIST_LOADING = 'Movie List: LOADING';
export const MOVIE_LIST_SUCCESS = 'Movie List: SUCCESS';
export const MOVIE_LIST_FAILURE = 'Movie List: FAILURE';

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
