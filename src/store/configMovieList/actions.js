export const CONFIG_SORT_MOVIELIST = 'Config Movie List: Sort';
export const CONFIG_DISPLAY_MOVIELIST = 'Config Movie List: Display type';
export const CONFIG_PAGE_MOVIELIST = 'Config Movie List: Page';
export const CONFIG_REDIRECT_MOVIELIST = 'Config Movie List: Redirect';

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