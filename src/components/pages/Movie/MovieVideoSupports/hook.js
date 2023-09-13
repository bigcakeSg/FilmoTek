import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';

import {
  selectSupportBd,
  selectSupportDvd,
  selectSupportLd,
  selectSupportUhd,
  selectSupportVhs
} from '../../../../store/videoSupports/selectors';
import { useCallback } from 'react';
import { addNotification } from '../../../../store/notification/actions';
import { useState } from 'react';
import { patchSingleSupports } from '../../../../store/videoSupports/thunks';

export const useMovieVideoSupports = (movieId) => {
  const dispatch = useDispatch();

  const supportVhs = useSelector(selectSupportVhs);
  const supportLd = useSelector(selectSupportLd);
  const supportDvd = useSelector(selectSupportDvd);
  const supportBd = useSelector(selectSupportBd);
  const supportUhd = useSelector(selectSupportUhd);

  const [isSavingVhs, setIsSavingVhs] = useState(false);
  const [isSavingLd, setIsSavingLd] = useState(false);
  const [isSavingDvd, setIsSavingDvd] = useState(false);
  const [isSavingBd, setIsSavingBd] = useState(false);
  const [isSavingUhd, setIsSavingUhd] = useState(false);

  const isVhs = useMemo(
    () => supportVhs.includes(movieId),
    [movieId, supportVhs]
  );

  const isLd = useMemo(() => supportLd.includes(movieId), [movieId, supportLd]);

  const isDvd = useMemo(
    () => supportDvd.includes(movieId),
    [movieId, supportDvd]
  );

  const isBd = useMemo(() => supportBd.includes(movieId), [movieId, supportBd]);

  const isUhd = useMemo(
    () => supportUhd.includes(movieId),
    [movieId, supportUhd]
  );

  const handleChangeVideoSupport = useCallback(
    async (support) => {
      let alreadyExists;

      switch (support) {
        case 'vhs':
          alreadyExists = isVhs;
          setIsSavingVhs(true);
          break;
        case 'ld':
          alreadyExists = isLd;
          setIsSavingLd(true);
          break;
        case 'dvd':
          alreadyExists = isDvd;
          setIsSavingDvd(true);
          break;
        case 'bd':
          alreadyExists = isBd;
          setIsSavingBd(true);
          break;
        case 'uhd':
          alreadyExists = isUhd;
          setIsSavingUhd(true);
          break;
        default:
          alreadyExists = false;
      }

      await dispatch(patchSingleSupports(movieId, support, alreadyExists));
      setIsSavingVhs(false);
      setIsSavingLd(false);
      setIsSavingDvd(false);
      setIsSavingBd(false);
      setIsSavingUhd(false);

      dispatch(
        addNotification({
          open: true,
          severity: 'success',
          message: 'Video supports updated'
        })
      );
    },
    [isBd, isDvd, isLd, isUhd, isVhs, movieId]
  );

  return {
    isVhs,
    isLd,
    isDvd,
    isBd,
    isUhd,
    handleChangeVideoSupport,
    isSavingVhs,
    isSavingLd,
    isSavingDvd,
    isSavingBd,
    isSavingUhd
  };
};
