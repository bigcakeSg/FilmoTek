import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadImageAsBlob } from '../../../../utils/helpers';

export const useCastingThumbnail = (casting) => {
  // FIXME: load blob
  const dispatch = useDispatch();
  const [castBlob, setCastBlob] = useState([]);

  useEffect(() => {
    const getMoviePicture = async (url, id) => {
      let blob = '';

      if (url) blob = await dispatch(loadImageAsBlob(url, id));

      setCastBlob(blob);
    };

    getMoviePicture(casting?.name?.picture?.url, casting?.name?.id);
  }, [casting]);

  return { castBlob };
};
