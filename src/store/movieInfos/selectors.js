import { createSelector } from 'reselect';

const movieInfosStore = (state) => state.movieInfos;

const selectMovieInfosData = createSelector(
  movieInfosStore,
  (store) => store.data
);

export const selectMovieInfosLoading = createSelector(
  movieInfosStore,
  (store) => store.loading
);

export const selectMovieInfosBaseInfos = createSelector(
  selectMovieInfosData,
  (data) => data.base_info
);

export const selectMovieInfosPrincipalCast = createSelector(
  selectMovieInfosData,
  (data) => data.principalCast
);

export const selectMovieInfosExtendedCast = createSelector(
  selectMovieInfosData,
  (data) => data.extendedCast
);

export const selectMovieInfosCreators = createSelector(
  selectMovieInfosData,
  (data) => data.creators_directors_writers
);

export const selectMovieInfosTitles = createSelector(
  selectMovieInfosData,
  (data) => data.titles
);

export const selectMovieId = createSelector(
  selectMovieInfosData,
  (data) => data.id
);
