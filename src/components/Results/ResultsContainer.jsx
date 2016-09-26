import React from 'react';
import { connect } from 'react-redux';
import { DATA_FETCH_STATUS } from 'constants';
import { getMoreResults } from '../../actions/search';
import Results from './index';
import Loading from '../Loading';
import './Results.scss';

const propTypes = {
  status: React.PropTypes.string,
  results: React.PropTypes.array,
  pagesLoaded: React.PropTypes.number,
  hasMorePages: React.PropTypes.func,
};

const ResultsContainer = (props) => {
  switch (props.status) {
    case (DATA_FETCH_STATUS.NOT_ASKED):
      return null;
    case (DATA_FETCH_STATUS.PROGRESS): {
      const progress = <Loading />;
      if (props.results.length) {
        return <Results results={props.results}>{progress}</Results>;
      }
      return progress;
    }
    case (DATA_FETCH_STATUS.SUCCESS): {
      return <Results results={props.results} />;
    }
    case (DATA_FETCH_STATUS.FAILURE): {
      // show error page
      return <div>Some errors</div>;
    }
    default:
      return null;
  }
};

ResultsContainer.propTypes = propTypes;

export default connect((state) => {
  const { status, results, pagesLoaded } = state.search;
  return { status, results, pagesLoaded };
}, {})(ResultsContainer);
