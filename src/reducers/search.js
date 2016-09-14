import { combineReducers } from 'redux';
import { SHOW_TOOLTIP, HIDE_TOOLTIP, TOGGLE_FOCUS } from '../actions/actionTypes';

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

export default combineReducers({ isTooltipVisible, isFocused });
