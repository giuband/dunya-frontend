import { SHOW_TOOLTIP, HIDE_TOOLTIP } from './actionTypes';
import makeActionCreator from './makeActionCreator';

export const showSearchTooltip = makeActionCreator(SHOW_TOOLTIP);
export const hideSearchTooltip = makeActionCreator(HIDE_TOOLTIP);
