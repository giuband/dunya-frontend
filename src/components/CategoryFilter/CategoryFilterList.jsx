import React from 'react';
import CategoryFilterEntry from './CategoryFilterEntry';
import CategoryFilterSearch from './CategoryFilterSearch';
import { getEntryId } from '../../selectors/filtersData';
import './CategoryFilterList.scss';

const propTypes = {
  category: React.PropTypes.string,
  data: React.PropTypes.array,
};

const CategoryFilterList = props => (
  <div className="CategoryFilter__category-catalogue">
    <div className="CategoryFilter__category-all-entries-list">
    {props.data.map(entry =>
      <CategoryFilterEntry key={getEntryId(entry)} category={props.category} entry={entry} />)}
    </div>
    <CategoryFilterSearch category={props.category} />
  </div>
);

CategoryFilterList.propTypes = propTypes;
export default CategoryFilterList;
