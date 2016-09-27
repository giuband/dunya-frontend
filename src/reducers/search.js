import { combineReducers } from 'redux';
import { DATA_FETCH_STATUS } from 'constants';
import { SHOW_TOOLTIP, HIDE_TOOLTIP, TOGGLE_FOCUS, SEARCH_REQUEST,
  SEARCH_SUCCESS, SEARCH_FAILURE, UPDATE_SEARCH_INPUT } from '../actions/actionTypes';

const isTooltipVisible = (state = false, action) => {
  switch (action.type) {
    case SHOW_TOOLTIP:
      return true;
    case HIDE_TOOLTIP:
      return false;
    default:
      return state;
  }
};

const isFocused = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_FOCUS:
      return !state;
    default:
      return state;
  }
};

const status = (state = DATA_FETCH_STATUS.NOT_ASKED, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return DATA_FETCH_STATUS.PROGRESS;
    case SEARCH_SUCCESS:
      return DATA_FETCH_STATUS.SUCCESS;
    case SEARCH_FAILURE:
      return DATA_FETCH_STATUS.FAILURE;
    default:
      return state;
  }
};

const results = (state = [], action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return [];
    case SEARCH_SUCCESS:
      return [...state, ...action.results];
    default:
      return state;
  }
};

const input = (state = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH_INPUT:
      return action.input;
    default:
      return state;
  }
};

const pagesLoaded = (state = 0, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return 0;
    case SEARCH_SUCCESS:
      return state + 1;
    default:
      return state;
  }
};

export default combineReducers({
  isTooltipVisible,
  isFocused,
  status,
  results,
  input,
  pagesLoaded,
});
