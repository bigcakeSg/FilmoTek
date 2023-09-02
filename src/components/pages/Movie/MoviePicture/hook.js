import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadImageAsBlob } from '../../../../utils/helpers';

export const useMoviePicture = (movieUrl, movieId, loading) => {
  const dispatch = useDispatch();
  const [blobUrl, setBlobUrl] = useState('');
  const [pictureLoading, setPictureLoading] = useState(true);

  useEffect(() => {
    const getMoviePicture = async (url, id) => {
      setPictureLoading(true);
      let blob = '';

      if (url) blob = await dispatch(loadImageAsBlob(url, id));

      setPictureLoading(false);
      setBlobUrl(blob);
    };

    getMoviePicture(movieUrl, movieId);
  }, [movieUrl]);

  return { blobUrl, pictureLoading };
};
