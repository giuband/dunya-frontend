import React from 'react';
import CategoryFilter from './CategoryFilter';
import '../../stylesheets/RefineSearch.scss';

const getArtists = (numOfArtists) =>
  [...Array(numOfArtists).keys()].map(index => ({
    name: `Cool Artist ${index}`,
    id: index,
    concerts: [`${(index % 2) === 0 ? '1' : '2'}`, '5'],
    raagas: ['1', `${(index % 2) === 0 ? '3' : '5'}`],
    taalas: [`${(index % 2) === 0 ? '1' : '3'}`, '4'],
    instruments: [`${(index % 2) === 0 ? '1' : '4'}`, '5'],
  }));

const getConcerts = (concertsIds) =>
  concertsIds.map((concertID, index) => ({
    name: `Cool Concert ${index}`,
    id: concertID,
    raagas: ['1', `${(index % 2) === 0 ? '3' : '5'}`],
    taalas: [`${(index % 2) === 0 ? '1' : '3'}`, '4'],
    instruments: [`${(index % 2) === 0 ? '1' : '4'}`, '5'],
  }));

const getRefineGenericCategory = (categoryName, categoryIDs) =>
  categoryIDs.map((id, index) => ({
    id,
    name: `Cool ${categoryName} ${index}`,
  }));

export const receivedData = {
  artists: getArtists(10),
  concerts: getConcerts([1, 2, 5]),
  instruments: getRefineGenericCategory('instrument', [1, 4, 5]),
  raagas: getRefineGenericCategory('raaga', [1, 3, 5]),
  taalas: getRefineGenericCategory('taala', [1, 3, 4]),
};

const RefineSearch = () => (
  <div className="RefineSeach">
    <header className="RefineSearch__category-name-header">
      Refine
    </header>
    <div>
      {Object.keys(receivedData).map((categoryFilter) =>
        <CategoryFilter
          key={categoryFilter}
          title={categoryFilter}
          data={receivedData[categoryFilter]}
        />)
        }
    </div>
  </div>
);

export default RefineSearch;
