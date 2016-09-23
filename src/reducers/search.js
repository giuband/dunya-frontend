import { combineReducers } from 'redux';
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

const status = (state = 'success', action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return 'progress';
    case SEARCH_SUCCESS:
      return 'success';
    case SEARCH_FAILURE:
      return 'error';
    default:
      return state;
  }
};

const results = (state = [], action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return [];
    case SEARCH_SUCCESS:
      return action.results;
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

export default combineReducers({ isTooltipVisible, isFocused, status, results, input });
