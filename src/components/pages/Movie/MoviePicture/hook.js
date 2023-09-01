import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadImageAsBlob } from '../../../../utils/helpers';

export const useMoviePicture = (movieUrl, movieId) => {
  const dispatch = useDispatch();
  const [blobUrl, setBlobUrl] = useState('');

  useEffect(() => {
    const getMoviePicture = async (url, id) => {
      let blob = '';

      if (url) blob = await dispatch(loadImageAsBlob(url, id));

      setBlobUrl(blob);
    };

    getMoviePicture(movieUrl, movieId);
  }, [movieUrl]);

  return { blobUrl };
};
