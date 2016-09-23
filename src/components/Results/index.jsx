import React from 'react';
import ResultItem from './ResultItem';
import { artists, concerts } from '../../utils/resultsMock';
import './Results.scss';

console.log(artists, concerts);

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
