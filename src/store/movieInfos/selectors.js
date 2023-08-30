import { createSelector } from 'reselect';

const movieInfosStore = (state) => state.movieInfos;

export const selectMovieInfosData = createSelector(
  movieInfosStore,
  (store) => store.data
);

export const selectMovieInfosLoading = createSelector(
  movieInfosStore,
  (store) => store.loading
);

export const selectMovieId = createSelector(
  selectMovieInfosData,
  (data) => data.id
);
