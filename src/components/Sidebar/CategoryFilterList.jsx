import React from 'react';
import CategoryFilterEntry from './CategoryFilterEntry';
import CategoryFilterSearch from './CategoryFilterSearch';

const propTypes = {
  title: React.PropTypes.string,
  data: React.PropTypes.object,
};

const CategoryFilterList = (props) => (
  <div className="CategoryFilter__category-catalogue">
    <div className="CategoryFilter__category-all-entries-list">
    {props.data.map(entry => <CategoryFilterEntry {...entry} />)}
    </div>
    <CategoryFilterSearch title={props.title} />
  </div>
);

CategoryFilterList.propTypes = propTypes;
export default CategoryFilterList;
