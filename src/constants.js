/**
 * Settings
 */
// API address to get data to fill up filters section
export const FILTERS_DATA_URL = {
  carnatic: 'https://whatever',
  hindustani: 'https://whatever',
};

// whether to show in selected list only entries that fulfill all filters
export const SHOW_ONLY_VISIBLE_SELECTED = false;

// whether to interpret links starting with / as locals or remote ones
// N.B. it MUST be false on dunya production
export const USE_REMOTE_SOURCES = true;
export const REMOTE_URL = 'http://dunya.compmusic.upf.edu';

// whether to store application state on localSession
export const STORE_APPLICATION_STATE = true;


/**
 * App constants, not meant to be edited
 */
export const DATA_FETCH_STATUS = {
  NOT_ASKED: 'NOT_ASKED',
  PROGRESS: 'PROGRESS',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};
