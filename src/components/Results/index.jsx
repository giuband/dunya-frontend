import React from 'react';
import ResultItem from './ResultItem';

const propTypes = {
  results: React.PropTypes.array,
  children: React.PropTypes.element,
};

const Results = props =>
  <section className="Results">
    <header className="Results__header">
      Results
    </header>
    {props.results.map((result, index) => <ResultItem key={index} result={result} />)}
    {props.children}
  </section>;

Results.propTypes = propTypes;
export default Results;
