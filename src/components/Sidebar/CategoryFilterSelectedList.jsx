import React from 'react';

const propTypes = {
  category: React.PropTypes.string,
};

const CategoryFilterSelectedList = (props) => (
  <div className="CategoryFilter__category-selected-entries-list">
    {`No ${props.category} selected`}
  </div>
);

CategoryFilterSelectedList.propTypes = propTypes;
export default CategoryFilterSelectedList;
