import { useDispatch, useSelector } from 'react-redux';
import {
  configDisplayMovieList,
  configSearchTitleMovieList,
  configSeenfilterMovieList,
  configSortMovieList,
  configVideoFormatMovieList
} from '../../../../store/configMovieList/actions';
import {
  selecSort,
  selectDisplayType,
  selectSearchTitle,
  selectSeenFilter,
  selectVideoFormatsFilter
} from '../../../../store/configMovieList/selectors';
import { selectRegion } from '../../../../store/config/selectors';
// import { debounce } from '../../../../utils/helpers';
import { useMemo } from 'react';

export const useMovieListActionsButtons = () => {
  const dispatch = useDispatch();

  const sortType = useSelector(selecSort);
  const displayType = useSelector(selectDisplayType);
  const searchTitle = useSelector(selectSearchTitle);
  const regionLanguage = useSelector(selectRegion);
  const seenFilterValues = useSelector(selectSeenFilter);
  const videoFormatFilterValues = useSelector(selectVideoFormatsFilter);

  const handleSeenCheck = (event) => {
    const {
      target: { value }
    } = event;

    dispatch(configSeenfilterMovieList(value));
  };

  const handleVideoFormatCheck = (event) => {
    const {
      target: { value }
    } = event;

    dispatch(configVideoFormatMovieList(value));
  };

  const handleDisplayChange = (_, newDisplay) => {
    dispatch(configDisplayMovieList(newDisplay));
  };

  const handleSortChange = (event) => {
    dispatch(configSortMovieList(event.target.value));
  };

  // FIXME: debounce
  // const filterTitle = debounce((value) => {
  //   dispatch(configSearchTitleMovieList(value));
  // }, 500);

  const handleSearchTitleChange = (event) => {
    // filterTitle(event.target.value);
    dispatch(configSearchTitleMovieList(event.target.value));
  };

  const handleClearTitleFilter = () => {
    dispatch(configSearchTitleMovieList(''));
  };

  const country = useMemo(() => {
    if (regionLanguage === 'FR') return 'French';
    else return 'Region';
  }, [regionLanguage]);

  return {
    handleDisplayChange,
    handleSortChange,
    handleSearchTitleChange,
    sortType,
    displayType,
    searchTitle,
    handleClearTitleFilter,
    country,
    seenFilterValues,
    handleSeenCheck,
    videoFormatFilterValues,
    handleVideoFormatCheck
  };
};
