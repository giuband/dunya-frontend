import React from 'react';
import CategoryFilterEntry from './CategoryFilterEntry';
import CategoryFilterSearch from './CategoryFilterSearch';

const propTypes = {
  category: React.PropTypes.string,
  data: React.PropTypes.array,
};

const CategoryFilterList = (props) => (
  <div className="CategoryFilter__category-catalogue">
    <div className="CategoryFilter__category-all-entries-list">
    {props.data.map(entry =>
      <CategoryFilterEntry key={entry.name} category={props.category} {...entry} />)}
    </div>
    <CategoryFilterSearch category={props.category} />
  </div>
);

CategoryFilterList.propTypes = propTypes;
export default CategoryFilterList;
