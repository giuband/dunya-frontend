import React from 'react';

const propTypes = {
  name: React.PropTypes.string,
};

const CategoryFilterEntry = (props) => (
  <a
    key={props.name}
    className="CategoryFilter__category-entry"
    tabIndex="0"
  >{props.name}</a>
);

CategoryFilterEntry.propTypes = propTypes;
export default CategoryFilterEntry;
