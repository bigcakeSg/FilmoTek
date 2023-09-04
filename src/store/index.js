import { combineReducers } from 'redux';
import configReducer from './config/reducer.js';
import movieListReducer from './movieList/reducer.js';
import movieInfosReducer from './movieInfos/reducer.js';
import configMovieListReducer from './configMovieList/reducer.js';

export default combineReducers({
  config: configReducer,
  configMovieList: configMovieListReducer,
  movieList: movieListReducer,
  movieInfos: movieInfosReducer
});
