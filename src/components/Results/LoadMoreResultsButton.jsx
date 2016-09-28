import React from 'react';

const propTypes = {
  moreResults: React.PropTypes.number,
};

const LoadMoreResultsButton = props =>
  <button className="LoadMoreResults" type="submit">
    Load More ({props.moreResults})
  </button>;

LoadMoreResultsButton.propTypes = propTypes;
export default LoadMoreResultsButton;
