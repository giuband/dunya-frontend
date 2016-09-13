import { combineReducers } from 'redux';
import filtersData from './filtersData';
import search from './search';

export default combineReducers({
  filtersData,
  search,
});
