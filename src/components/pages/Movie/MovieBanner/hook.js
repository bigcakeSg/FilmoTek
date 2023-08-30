import { useMemo } from 'react';

export const useMovieBanner = (movieInfos, loading) => {
  const backgroundImage = useMemo(
    () =>
      loading || !movieInfos?.picture?.url
        ? 'unset'
        : `url(${movieInfos.picture.url})`,
    [loading, movieInfos]
  );

  return { backgroundImage };
};
