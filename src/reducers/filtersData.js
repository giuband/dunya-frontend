import { GET_FILTERS_DATA_REQUEST, GET_FILTERS_DATA_SUCCESS, GET_FILTERS_DATA_FAILURE,
  TOGGLE_SELECTED_ENTRY }
  from '../actions/actionTypes';
import { DATA_FETCH_STATUS } from '../constants';

const selectedDataCategory = (state = [], action, categoryName) => {
  if (action.category !== categoryName) {
    return state;
  }
  switch (action.type) {
    case TOGGLE_SELECTED_ENTRY: {
      if (state.includes(action.entry)) {
        // remove entry if already selected ...
        return state.filter(entry => entry !== action.entry);
      }
      // ... otherwise add it to the list of selected items
      return [...state, action.entry];
    }
    default:
      return state;
  }
};

const selectedData = (state = {}, action) => {
  switch (action.type) {
    case GET_FILTERS_DATA_SUCCESS: {
      return Object.keys(action.data).reduce((curState, curCategory) =>
        Object.assign(curState, { [curCategory]: [] }), {});
    }
    case TOGGLE_SELECTED_ENTRY: {
      return Object.keys(state).reduce((curState, curCategory) =>
        Object.assign(curState, {
          [curCategory]: selectedDataCategory(state[curCategory], action, curCategory),
        }), {});
    }
    default:
      return state;
  }
};

const receivedData = (state = {}, action) => {
  switch (action.type) {
    case GET_FILTERS_DATA_SUCCESS:
      return action.data;
    default:
      return state;
  }
};

const status = (state = DATA_FETCH_STATUS.PROGRESS, action) => {
  switch (action.type) {
    case GET_FILTERS_DATA_REQUEST:
      return DATA_FETCH_STATUS.PROGRESS;
    case GET_FILTERS_DATA_SUCCESS:
      return DATA_FETCH_STATUS.SUCCESS;
    case GET_FILTERS_DATA_FAILURE:
      return DATA_FETCH_STATUS.FAILURE;
    default:
      return state;
  }
};

const filtersData = (state = {}, action) => ({
  selectedData: selectedData(state.selectedData, action),
  receivedData: receivedData(state.receivedData, action),
  status: status(state.status, action),
});

export default filtersData;
