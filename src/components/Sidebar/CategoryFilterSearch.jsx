import React from 'react';

const propTypes = {
  title: React.PropTypes.string,
};

const CategoryFilterSearch = (props) => (
  <div className="CategoryFilter__category-catalogue-search">
    <input
      type="text"
      placeholder={`Enter ${props.title.substring(0, props.title.length - 1)} name`}
    />
  </div>
);

CategoryFilterSearch.propTypes = propTypes;
export default CategoryFilterSearch;
