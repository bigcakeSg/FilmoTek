import { combineReducers } from 'redux';
import movieListReducer from './movieList/reducer.js';
import movieInfosReducer from './movieInfos/reducer.js';
import configMovieListReducer from './configMovieList/reducer.js';

export default combineReducers({
  configMovieList: configMovieListReducer,
  movieList: movieListReducer,
  movieInfos: movieInfosReducer
});
