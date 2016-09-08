import React from 'react';
import CategoryFilter from './CategoryFilter';
import '../../stylesheets/RefineSearch.scss';

const artist1 = {
  name: 'Cool Artist',
  id: '1',
  raagas: ['1', '2', '5'],
  taalas: ['4', '6'],
  concerts: ['1', '5'],
};

const receivedData = {
  artists: [artist1],
  concerts: [],
  instruments: [],
  raagas: [],
  taalas: [],
};

const RefineSearch = () => (
  <div className="RefineSeach">
    <header>
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
