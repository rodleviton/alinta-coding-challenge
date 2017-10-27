import movies from './movies-reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies
});

export default rootReducer;
