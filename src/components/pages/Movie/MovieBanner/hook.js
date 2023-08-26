import { useMemo } from 'react';

export const useMovieBanner = (movieInfos, loading) => {
  const backgroundImage = useMemo(
    () =>
      loading || !movieInfos?.primaryImage?.url
        ? 'unset'
        : `url(${movieInfos.primaryImage.url})`,
    [loading, movieInfos]
  );

  return { backgroundImage };
};
