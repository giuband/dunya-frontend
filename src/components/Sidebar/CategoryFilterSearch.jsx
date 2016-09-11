import React from 'react';
import pluralize from 'pluralize';

const propTypes = {
  category: React.PropTypes.string,
};

const CategoryFilterSearch = (props) => (
  <div className="CategoryFilter__category-catalogue-search">
    <input
      type="text"
      placeholder={`Enter ${pluralize(props.category, 1)} name`}
    />
  </div>
);

CategoryFilterSearch.propTypes = propTypes;
export default CategoryFilterSearch;
