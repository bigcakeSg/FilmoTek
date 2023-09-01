import { createSelector } from 'reselect';

const movieListStore = (state) => state.movieList;

export const selectMovieListLoading = createSelector(
  movieListStore,
  (store) => store.loading
);

export const selectMovieIdList = createSelector(
  movieListStore,
  (store) => store.data
);
