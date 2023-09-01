import {
  CONFIG_SORT_MOVIELIST,
  CONFIG_DISPLAY_MOVIELIST,
  CONFIG_PAGE_MOVIELIST,
  CONFIG_REDIRECT_MOVIELIST
} from './actions';

const initialState = {
  sort: 'ALPHA',
  displayType: 'TILES',
  page: 1,
  creationRedirect: false
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
    default:
      return { ...state };
  }
}
