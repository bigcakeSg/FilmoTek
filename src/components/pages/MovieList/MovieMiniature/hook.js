import React, { useMemo, useState } from 'react';
import { render } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieTitleByRegion } from '../../../../utils/helpers';
import { selectRegion } from '../../../../store/config/selectors';
import { updateSeenMovie } from '../../../../store/movieList/thunks';
import VideoSupportForm from '../../../shared/VideoSupportForm';

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

  const [editSupportOpen, setEditSupportOpen] = useState(false);

  const handleCancelEditSupport = () => {
    // const modalContainer = document.getElementById('modal-container');
    // render('', modalContainer);
    // setEditSupportOpen(false);
  };
  // console.log(editSupportOpen);
  const handleEditSupport = (e) => {
    e.preventDefault();

    // const modalContainer = document.getElementById('modal-container');

    // render(
    //   <VideoSupportForm
    //     movieId={movieMiniInfos._id}
    //     handleEditSupport={() => null}
    //     handleCancelEditSupport={handleCancelEditSupport}
    //     editSupportOpen={editSupportOpen}
    //     setEditSupportOpen={() => null}
    //     isSupportEdition={false}
    //   />,
    //   modalContainer,
    //   () => setEditSupportOpen(true)
    // );
  };

  return {
    movieTitleRegional,
    isLoading: false,
    handleSeen,
    handleEditSupport
  };
};
