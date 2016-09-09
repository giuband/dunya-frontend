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
      <section>
        <div className="CategoryFilter__category-selected-entries-list">
          {`No ${props.title} selected`}
        </div>
        <header>Our catalogue</header>
        <div className="CategoryFilter__category-catalogue">
          <div className="CategoryFilter__category-all-entries-list">
          {props.data.map(entry =>
            <div key={entry.name} className="CategoryFilter__category-entry">{entry.name}</div>)}
          </div>
          <div className="CategoryFilter__category-catalogue-search" />
        </div>
      </section>
    </details>
  </div>
);

CategoryFilter.propTypes = propTypes;
export default CategoryFilter;
