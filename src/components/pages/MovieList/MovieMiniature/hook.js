import { useMemo, useRef } from 'react';
import { getMovieTitleByRegion } from '../../../../utils/helpers';
import { regionLanguage } from '../../../../utils/configs';

export const useMovieMiniature = (movieMiniInfos) => {
  const movieTitleFrench = useMemo(
    () =>
      movieMiniInfos?.regionalTitles
        ? getMovieTitleByRegion(movieMiniInfos.regionalTitles, regionLanguage)
        : '',
    [movieMiniInfos]
  );

  // FIXME: code below to load blob image
  /*
  useEffect(() => {
    setIsLoading(true);

    const getBlob = async (id) => {
      const blob = await dispatch(
        loadImageAsBlob(movieMiniInfos.picture.url, id)
      );
      setBlobUrl(blob);
      setIsLoading(false);
    };

    setBlobUrl(movieMiniInfos.picture.url);
    setIsLoading(false);
    // getBlob(movieMiniInfos.imdbId);
  }, [movieMiniInfos]);
  */

  // code below to load movie mini-infos
  /*
  const [movieMiniInfos, setMovieMiniInfos] = useState('');
  useEffect(() => {
    const getInfos = async (id) => {
      const infos = await dispatch(getMovieMiniInfo(id));
      setMovieMiniInfos(infos);
      const blob = await dispatch(loadImageAsBlob(infos.picture.url, id));
      setBlobUrl(blob);
    };
    getInfos(movieId);
  }, [movieId]);
  */

  return {
    movieTitleFrench,
    isLoading: false
  };
};
