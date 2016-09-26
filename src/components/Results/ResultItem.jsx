import React from 'react';
import './ResultItem.scss';

const propTypes = {
  result: React.PropTypes.object,
};
const ResultItem = props =>
  <div className="ResultItem">{props.result.name}</div>;

ResultItem.propTypes = propTypes;
export default ResultItem;
