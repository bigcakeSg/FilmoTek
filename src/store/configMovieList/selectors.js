import { createSelector } from 'reselect';

const configMovieListStore = (state) => state.configMovieList;

export const selecSort = createSelector(
  configMovieListStore,
  (store) => store.sort
);

export const selectDisplayType = createSelector(
  configMovieListStore,
  (store) => store.displayType
);

export const selectPage = createSelector(
  configMovieListStore,
  (store) => store.page
);
