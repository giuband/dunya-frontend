import React from 'react';

const propTypes = {
  title: React.PropTypes.string,
  data: React.PropTypes.array,
};

const CategoryFilter = (props) => (
  <div className="CategoryFilter">
    <details>
      <summary>
        <a tabIndex="0">
          {props.title}
          <i className="fa fa-lg fa-plus-circle" aria-hidden />
        </a>
      </summary>
      <section>
        <div className="CategoryFilter__category-selected-entries-list">
          {`No ${props.title} selected`}
        </div>
        <header className="CategoryFilter__category-catalogue-header">Available</header>
        <div className="CategoryFilter__category-catalogue">
          <div className="CategoryFilter__category-all-entries-list">
          {props.data.map(entry =>
            <a
              key={entry.name}
              className="CategoryFilter__category-entry"
              tabIndex="0"
            >{entry.name}</a>)}
          </div>
          <div className="CategoryFilter__category-catalogue-search">
            <input
              type="text"
              placeholder={`Enter ${props.title.substring(0, props.title.length - 1)} name`}
            />
          </div>
        </div>
      </section>
    </details>
  </div>
);

CategoryFilter.propTypes = propTypes;
export default CategoryFilter;
