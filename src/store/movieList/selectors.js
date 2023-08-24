import { createSelector } from 'reselect';

const movieListStore = (state) => state.movieList;

export const selectMovieInfosLoading = createSelector(
  movieListStore,
  (store) => {
    return store.loading;
  }
);
