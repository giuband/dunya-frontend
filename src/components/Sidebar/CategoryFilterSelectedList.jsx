import React from 'react';

const propTypes = {
  title: React.PropTypes.string,
};

const CategoryFilterSelectedList = (props) => (
  <div className="CategoryFilter__category-selected-entries-list">
    {`No ${props.title} selected`}
  </div>
);

CategoryFilterSelectedList.propTypes = propTypes;
export default CategoryFilterSelectedList;
