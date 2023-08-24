export const MOVIE_INFOS_LOADING = 'Movie Infos: LOADING';
export const MOVIE_INFOS_SUCCESS = 'Movie Infos: SUCCESS';
export const MOVIE_INFOS_FAILURE = 'Movie Infos: FAILURE';

export const movieInfosLoading = () => ({
  type: MOVIE_INFOS_LOADING
});

export const movieInfosSuccess = (data) => ({
  type: MOVIE_INFOS_SUCCESS,
  payload: data
});

export const movieInfosFailure = (error) => ({
  type: MOVIE_INFOS_FAILURE,
  error
});
