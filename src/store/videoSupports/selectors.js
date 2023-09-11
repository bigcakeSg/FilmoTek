import { createSelector } from 'reselect';

const supportStoreStore = (state) => state.videoSupport;

export const selectSupportVhs = createSelector(
  supportStoreStore,
  (store) => store.vhs
);

export const selectSupportLd = createSelector(
  supportStoreStore,
  (store) => store.ld
);

export const selectSupportDvd = createSelector(
  supportStoreStore,
  (store) => store.dvd
);

export const selectSupportBd = createSelector(
  supportStoreStore,
  (store) => store.bd
);

export const selectSupportUhd = createSelector(
  supportStoreStore,
  (store) => store.uhd
);
