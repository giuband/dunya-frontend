import React from 'react';

const propTypes = {
  category: React.PropTypes.string,
};

const CategoryFilterSearch = (props) => (
  <div className="CategoryFilter__category-catalogue-search">
    <input
      type="text"
      placeholder={`Enter ${props.category.substring(0, props.category.length - 1)} name`}
    />
  </div>
);

CategoryFilterSearch.propTypes = propTypes;
export default CategoryFilterSearch;
