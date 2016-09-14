import { SHOW_TOOLTIP, HIDE_TOOLTIP, TOGGLE_FOCUS } from './actionTypes';
import makeActionCreator from './makeActionCreator';

export const showSearchTooltip = makeActionCreator(SHOW_TOOLTIP);
export const hideSearchTooltip = makeActionCreator(HIDE_TOOLTIP);
export const toggleFocus = makeActionCreator(TOGGLE_FOCUS);
