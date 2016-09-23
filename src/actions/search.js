import { SHOW_TOOLTIP, HIDE_TOOLTIP, TOGGLE_FOCUS, SEARCH_REQUEST,
  SEARCH_SUCCESS, SEARCH_FAILURE, UPDATE_SEARCH_INPUT } from './actionTypes';
import makeActionCreator from './makeActionCreator';
import { getResults } from '../utils/mockResults';

export const showSearchTooltip = makeActionCreator(SHOW_TOOLTIP);
export const hideSearchTooltip = makeActionCreator(HIDE_TOOLTIP);
export const toggleFocus = makeActionCreator(TOGGLE_FOCUS);

const searchRequest = makeActionCreator(SEARCH_REQUEST);
const searchSuccess = makeActionCreator(SEARCH_SUCCESS, 'results');
const searchFailure = makeActionCreator(SEARCH_FAILURE, 'error');

export const updateSearchInput = makeActionCreator(UPDATE_SEARCH_INPUT, 'input');

export const getSearchResults = (query, selectedData) => (dispatch) => {
  dispatch(searchRequest());
  setTimeout(() => {
    getResults().then(data => dispatch(searchSuccess(data)),
    error => dispatch(searchFailure(error)));
  }, 1000);
};
