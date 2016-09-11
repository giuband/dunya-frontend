import React from 'react';
import CategoryFilterSelectedList from './CategoryFilterSelectedList';
import CategoryFilterList from './CategoryFilterList';

const propTypes = {
  category: React.PropTypes.string,
  data: React.PropTypes.array,
};

const CategoryFilter = (props) => (
  <div className="CategoryFilter">
    <details>
      <summary>
        <a tabIndex="0">
          {props.category}
          <i className="fa fa-lg fa-plus-circle" aria-hidden />
        </a>
      </summary>
      <section>
        <CategoryFilterSelectedList data={props.data} category={props.category} />
        <header className="CategoryFilter__category-catalogue-header">Available</header>
        <CategoryFilterList data={props.data} category={props.category} />
      </section>
    </details>
  </div>
);

CategoryFilter.propTypes = propTypes;
export default CategoryFilter;
