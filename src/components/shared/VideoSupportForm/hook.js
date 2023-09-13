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
  const [initialSupports, setInitialSupports] = useState([]);

  const supportVhs = useSelector(selectSupportVhs);
  const supportLd = useSelector(selectSupportLd);
  const supportDvd = useSelector(selectSupportDvd);
  const supportBd = useSelector(selectSupportBd);
  const supportUhd = useSelector(selectSupportUhd);

  useEffect(() => {
    let supports = [];

    if (supportVhs.includes(movieId))
      supports = storeInArray(supports, 'vhs', true);
    if (supportLd.includes(movieId))
      supports = storeInArray(supports, 'ld', true);
    if (supportDvd.includes(movieId))
      supports = storeInArray(supports, 'dvd', true);
    if (supportBd.includes(movieId))
      supports = storeInArray(supports, 'bd', true);
    if (supportUhd.includes(movieId))
      supports = storeInArray(supports, 'uhd', true);

    setSupportsSelection(supports);
    setInitialSupports(supports);
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

  const handleCancelEditSupport = useCallback(() => {
    setEditSupportOpen(false);
    setSupportsSelection(initialSupports);
  }, [initialSupports]);

  return {
    handleEditSupport,
    isSupportEdition,
    supportsSelection,
    handleChangeSupportSelection,
    handleCancelEditSupport
  };
};
