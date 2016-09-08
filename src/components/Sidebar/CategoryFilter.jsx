import React from 'react';

const propTypes = {
  title: React.PropTypes.string,
  data: React.PropTypes.array,
};

const CategoryFilter = (props) => (
  <div className="CategoryFilter">
    <details>
      <summary>
        {props.title}
        <i className="fa fa-lg fa-plus-circle" aria-hidden />
      </summary>
      {props.data.map(entry =>
        <div key={entry.name} className="CategoryFilter__category-entry">{entry.name}</div>)}
    </details>
  </div>
);

CategoryFilter.propTypes = propTypes;
export default CategoryFilter;
