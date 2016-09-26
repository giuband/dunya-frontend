import React from 'react';
import { connect } from 'react-redux';
import ResultItem from './ResultItem';
import './Results.scss';

const Results = () => (
  <section className="Results">
    <header className="Results__header">
      Results
    </header>
    {/** allRecordings.map((recording, index) =>
      <ResultItem key={index} recording={recording} />) */}
  </section>
);

export default Results;
