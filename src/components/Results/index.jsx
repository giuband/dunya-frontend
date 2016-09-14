import React from 'react';
import ResultItem from './ResultItem';
import { receivedData } from '../Sidebar/RefineSearch';
import './Results.scss';

const generateRecordingsForConcert = (concert) => [...Array(20).keys()].map(index => ({
  id: index,
  name: `${concert.name} ${index}`,
}));

const generateRecordingsFromReceivedData = () => {
  const { concerts } = receivedData;
  return concerts.reduce((curState, curConcert) =>
    [...curState, ...generateRecordingsForConcert(curConcert)]
  , []);
};

// const allRecordings = generateRecordingsFromReceivedData();

const Results = () => (
  <div className="Results">
    Results
    {/** allRecordings.map((recording, index) =>
      <ResultItem key={index} recording={recording} />) */}
  </div>
);

export default Results;
