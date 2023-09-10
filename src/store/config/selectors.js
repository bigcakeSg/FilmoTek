import { createSelector } from 'reselect';

const configStoreData = (state) => state.config.data;

export const selectRegion = createSelector(
  configStoreData,
  (store) => store.region
);
