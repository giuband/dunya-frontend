import React from 'react';
import './ResultItem.scss';

const propTypes = {
  recording: React.PropTypes.object,
};
const ResultItem = (props) =>
  <div className="ResultItem">{props.recording.name}</div>;

ResultItem.propTypes = propTypes;
export default ResultItem;
