import { combineReducers } from 'redux';
import filtersData from './filtersData';
import search from './search';
import windowSize from './windowSize';

export default combineReducers({
  filtersData,
  search,
  windowSize,
});
