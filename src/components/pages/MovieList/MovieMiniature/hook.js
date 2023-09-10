import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieTitleByRegion } from '../../../../utils/helpers';
import { selectRegion } from '../../../../store/config/selector';
import { updateSeenMovie } from '../../../../store/movieList/thunks';

export const useMovieMiniature = (movieMiniInfos) => {
  const dispatch = useDispatch();
  const regionLanguage = useSelector(selectRegion);

  const movieTitleRegional = useMemo(
    () =>
      movieMiniInfos?.regionalTitles
        ? getMovieTitleByRegion(movieMiniInfos.regionalTitles, regionLanguage)
        : '',
    [movieMiniInfos]
  );

  const handleSeen = (e) => {
    e.preventDefault();
    dispatch(updateSeenMovie(movieMiniInfos.imdbId, !movieMiniInfos.seen));
  };

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
    movieTitleRegional,
    isLoading: false,
    handleSeen
  };
};
