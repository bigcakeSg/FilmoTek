import { createSelector } from 'reselect';

const movieListStore = (state) => state.movieList;

export const selectMovieListLoading = createSelector(
  movieListStore,
  (store) => {
    return store.loading;
  }
);

export const selectMovieIdList = createSelector(movieListStore, (store) => {
  return store.movieIdList;
});

export const selectMovieMiniInfoList = createSelector(
  movieListStore,
  (store) => {
    return store.movieMiniInfoList;
  }
);
