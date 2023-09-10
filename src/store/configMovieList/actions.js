export const CONFIG_SORT_MOVIELIST = 'Config Movie List: Sort';
export const CONFIG_DISPLAY_MOVIELIST = 'Config Movie List: Display type';
export const CONFIG_PAGE_MOVIELIST = 'Config Movie List: Page';
export const CONFIG_REDIRECT_MOVIELIST = 'Config Movie List: Redirect';
export const CONFIG_SEARCHTITLE_MOVIELIST = 'Config Movie List: Search title';
export const CONFIG_SEEN_FILTER_MOVIELIST = 'Config Movie List: Seen filter';

export const configSortMovieList = (data) => ({
  type: CONFIG_SORT_MOVIELIST,
  payload: data
});

export const configDisplayMovieList = (data) => ({
  type: CONFIG_DISPLAY_MOVIELIST,
  payload: data
});

export const configPageMovieList = (data) => ({
  type: CONFIG_PAGE_MOVIELIST,
  payload: data
});

export const configRedirectMovieList = (data) => ({
  type: CONFIG_REDIRECT_MOVIELIST,
  payload: data
});

export const configSearchTitleMovieList = (data) => ({
  type: CONFIG_SEARCHTITLE_MOVIELIST,
  payload: data
});

export const configSeenfilterMovieList = (data) => ({
  type: CONFIG_SEEN_FILTER_MOVIELIST,
  payload: data
});
