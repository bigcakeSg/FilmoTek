import { combineReducers } from 'redux';

import configReducer from './config/reducer.js';
import notificationReducer from './notification/reducer.js';
import movieListReducer from './movieList/reducer.js';
import movieInfosReducer from './movieInfos/reducer.js';
import configMovieListReducer from './configMovieList/reducer.js';
import videoSupportsReducer from './videoSupports/reducer.js';

export default combineReducers({
  config: configReducer,
  notification: notificationReducer,
  configMovieList: configMovieListReducer,
  movieList: movieListReducer,
  movieInfos: movieInfosReducer,
  videoSupport: videoSupportsReducer
});
