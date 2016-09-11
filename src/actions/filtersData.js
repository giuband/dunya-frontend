import makeActionCreator from './makeActionCreator';
import { GET_FILTERS_DATA_REQUEST, GET_FILTERS_DATA_SUCCESS, GET_FILTERS_DATA_FAILURE,
  TOGGLE_SELECTED_ENTRY, TOGGLE_EXPAND_CATEGORY, RESET_CATEGORY_SELECTIONS }
  from './actionTypes';
import { receivedData } from '../utils/mockFiltersData';

const getFiltersDataRequest = makeActionCreator(GET_FILTERS_DATA_REQUEST);
const getFiltersDataSuccess = makeActionCreator(GET_FILTERS_DATA_SUCCESS, 'data');
const getFiltersDataFailure = makeActionCreator(GET_FILTERS_DATA_FAILURE, 'error');

const fetchFiltersData = () => new Promise((resolve) => {
  resolve(receivedData);
});

export const getFiltersData = () => (dispatch) => {
  dispatch(getFiltersDataRequest());
  fetchFiltersData().then(
    data => dispatch(getFiltersDataSuccess(data)),
    error => dispatch(getFiltersDataFailure(error)));
};

export const toggleSelectedEntry = makeActionCreator(TOGGLE_SELECTED_ENTRY, 'entry', 'category');
export const toggleExpandCategory = makeActionCreator(TOGGLE_EXPAND_CATEGORY, 'category');
export const resetCategorySelections = makeActionCreator(RESET_CATEGORY_SELECTIONS);
