import { createSelector } from 'reselect';

const movieListStore = (state) => state.movieList;

const movieMiniInfosStore = createSelector(
  movieListStore,
  (store) => store.movieMiniInfosList
);

export const selectMovieListLoading = createSelector(
  movieListStore,
  (store) => store.loading
);

export const selectMovieIdList = createSelector(
  movieListStore,
  (store) => store.movieIdList
);

export const selectMovieMiniInfosLoading = (movieId) =>
  createSelector(movieMiniInfosStore, (store) => {
    return store?.[movieId] ? store[movieId]?.loading : true;
  });

export const selectMovieMiniInfosData = (movieId) =>
  createSelector(movieMiniInfosStore, (store) => store?.[movieId]?.infos);
