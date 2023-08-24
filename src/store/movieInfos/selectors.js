import { createSelector } from 'reselect';

const movieInfosStore = (state) => state.movieInfos;

const selectMovieInfosData = createSelector(movieInfosStore, (store) => {
  return store.data;
});

export const selectMovieInfosLoading = createSelector(
  movieInfosStore,
  (store) => {
    return store.loading;
  }
);

export const selectMovieInfosBaseInfos = createSelector(
  selectMovieInfosData,
  (data) => {
    return data.base_info;
  }
);

export const selectMovieInfosPrincipalCast = createSelector(
  selectMovieInfosData,
  (data) => {
    return data.principalCast;
  }
);

export const selectMovieInfosExtendedCast = createSelector(
  selectMovieInfosData,
  (data) => {
    return data.extendedCast;
  }
);

export const selectMovieInfosCreators = createSelector(
  selectMovieInfosData,
  (data) => {
    return data.creators_directors_writers;
  }
);

export const selectMovieInfosTitles = createSelector(
  selectMovieInfosData,
  (data) => {
    return data.titles;
  }
);
