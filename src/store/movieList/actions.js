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

export const MOVIE_MINI_INFOS_LOADING = 'Movie mini infos: LOADING';
export const MOVIE_MINI_INFOS_SUCCESS = 'Movie mini infos: SUCCESS';
export const MOVIE_MINI_INFOS_FAILURE = 'Movie mini infos: FAILURE';

export const movieMiniInfosLoading = (id) => ({
  type: MOVIE_MINI_INFOS_LOADING,
  id
});

export const movieMiniInfosSuccess = (data) => ({
  type: MOVIE_MINI_INFOS_SUCCESS,
  payload: data
});

export const movieMiniInfosFailure = (error, id) => ({
  type: MOVIE_MINI_INFOS_FAILURE,
  error,
  id
});
