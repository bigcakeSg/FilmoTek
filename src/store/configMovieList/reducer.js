import {
  CONFIG_SORT_MOVIELIST,
  CONFIG_DISPLAY_MOVIELIST,
  CONFIG_PAGE_MOVIELIST,
  CONFIG_REDIRECT_MOVIELIST,
  CONFIG_SEARCHTITLE_MOVIELIST,
  CONFIG_SEEN_FILTER_MOVIELIST,
  CONFIG_VIDEO_FORMATS_MOVIELIST
} from './actions';

const initialState = {
  sort: 'ALPHA',
  displayType: 'TILES',
  page: 1,
  creationRedirect: false,
  searchTitle: '',
  seenFilter: [],
  videoFormats: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CONFIG_SORT_MOVIELIST:
      return { ...state, sort: action.payload };
    case CONFIG_DISPLAY_MOVIELIST:
      return { ...state, displayType: action.payload };
    case CONFIG_PAGE_MOVIELIST:
      return { ...state, page: action.payload };
    case CONFIG_REDIRECT_MOVIELIST:
      return { ...state, creationRedirect: action.payload };
    case CONFIG_SEARCHTITLE_MOVIELIST:
      return { ...state, searchTitle: action.payload };
    case CONFIG_SEEN_FILTER_MOVIELIST:
      return { ...state, seenFilter: action.payload };
    case CONFIG_VIDEO_FORMATS_MOVIELIST:
      return { ...state, videoFormats: action.payload };
    default:
      return { ...state };
  }
}
