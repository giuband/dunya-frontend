import { GET_FILTERS_DATA_REQUEST, GET_FILTERS_DATA_SUCCESS, GET_FILTERS_DATA_FAILURE }
  from '../actions/actionTypes';
import { DATA_FETCH_STATUS } from '../constants';

const selectedData = (state = {}, action) => {
  switch (action.type) {
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
