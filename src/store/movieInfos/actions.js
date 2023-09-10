export const MOVIE_INFOS_LOADING = 'Movie Infos: loading';
export const MOVIE_INFOS_SUCCESS = 'Movie Infos: success';
export const MOVIE_INFOS_FAILURE = 'Movie Infos: failure';

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

export const MOVIE_ADD_SUCCESS = 'Movie: add success';
export const MOVIE_ADD_FAILURE = 'Movie: add failure';

export const movieAddSuccess = (data) => ({
  type: MOVIE_ADD_SUCCESS
});

export const movieAddFailure = (error) => ({
  type: MOVIE_ADD_FAILURE,
  error
});

export const MOVIE_REMOVE_SUCCESS = 'Movie: remove success';
export const MOVIE_REMOVE_FAILURE = 'Movie: remove failure';

export const movieRemoveSuccess = (data) => ({
  type: MOVIE_REMOVE_SUCCESS
});

export const movieRemoveFailure = (error) => ({
  type: MOVIE_REMOVE_FAILURE,
  error
});
