import React from 'react';
import ResultItem from './ResultItem';
import './Results.scss';

const Results = () => (
  <div className="Results">
    <header className="Results__header">
      Results
    </header>
    {/** allRecordings.map((recording, index) =>
      <ResultItem key={index} recording={recording} />) */}
  </div>
);

export default Results;
