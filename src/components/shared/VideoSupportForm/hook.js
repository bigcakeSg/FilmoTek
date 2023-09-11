import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNotification } from '../../../store/notification/actions';
import {
  selectSupportBd,
  selectSupportDvd,
  selectSupportLd,
  selectSupportUhd,
  selectSupportVhs
} from '../../../store/videoSupports/selectors';
import { useEffect } from 'react';
import { patchSupports } from '../../../store/videoSupports/thunks';

const storeInArray = (initialArray, value, add) => {
  const newSet = new Set(initialArray);

  if (add) newSet.add(value);
  else newSet.delete(value);

  return Array.from(newSet);
};

export const useVideoSupportForm = (movieId, setEditSupportOpen) => {
  const dispatch = useDispatch();

  const [isSupportEdition, setIsSupportEdition] = useState(false);
  const [supportsSelection, setSupportsSelection] = useState([]);

  const supportVhs = useSelector(selectSupportVhs);
  const supportLd = useSelector(selectSupportLd);
  const supportDvd = useSelector(selectSupportDvd);
  const supportBd = useSelector(selectSupportBd);
  const supportUhd = useSelector(selectSupportUhd);

  useEffect(() => {
    if (supportVhs.includes(movieId))
      setSupportsSelection((prevState) => storeInArray(prevState, 'vhs', true));
    if (supportLd.includes(movieId))
      setSupportsSelection((prevState) => storeInArray(prevState, 'ld', true));
    if (supportDvd.includes(movieId))
      setSupportsSelection((prevState) => storeInArray(prevState, 'dvd', true));
    if (supportBd.includes(movieId))
      setSupportsSelection((prevState) => storeInArray(prevState, 'bd', true));
    if (supportUhd.includes(movieId))
      setSupportsSelection((prevState) => storeInArray(prevState, 'uhd', true));
  }, [movieId, supportBd, supportDvd, supportLd, supportUhd, supportVhs]);

  const handleChangeSupportSelection = (event) => {
    setSupportsSelection((prevState) => {
      return storeInArray(prevState, event.target.name, event.target.checked);
    });
  };

  const handleEditSupport = useCallback(
    async (e) => {
      e.preventDefault();

      setIsSupportEdition(true);

      await dispatch(patchSupports(movieId, supportsSelection));

      setIsSupportEdition(false);
      setEditSupportOpen(false);

      dispatch(
        addNotification({
          open: true,
          severity: 'success',
          message: 'Video supports updated'
        })
      );
    },
    [movieId, supportsSelection]
  );

  return {
    handleEditSupport,
    isSupportEdition,
    supportsSelection,
    handleChangeSupportSelection
  };
};
