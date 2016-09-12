import React from 'react';
import { connect } from 'react-redux';
import CategoryFilterSelectedList from './CategoryFilterSelectedList';
import CategoryFilterList from './CategoryFilterList';
import { getVisibleConcerts, makeGetVisibleCategoryData } from '../../selectors/filtersData';

const propTypes = {
  category: React.PropTypes.string,
  data: React.PropTypes.array,
  selectedItemsCount: React.PropTypes.number,
};

// TODO: don't use <details> as not well supported in Firefox, use action toggleExpandCategory
const CategoryFilter = (props) => (
  <div className="CategoryFilter">
    <details>
      <summary>
        <a tabIndex="0">
          {props.category}
          <i className="fa fa-lg fa-plus-circle" aria-hidden />
          <span className="CategoryFilter__selected-counter">
            {(props.selectedItemsCount) ? props.selectedItemsCount : null}
          </span>
        </a>
      </summary>
      <section>
        <header className="CategoryFilter__category-catalogue-header">Selected</header>
        <CategoryFilterSelectedList data={props.data} category={props.category} />
        <header className="CategoryFilter__category-catalogue-header">Available</header>
        <CategoryFilterList data={props.data} category={props.category} />
      </section>
    </details>
  </div>
);

const makeMapStateToProps = (_, ownProps) => {
  const { category } = ownProps;
  let { data } = ownProps;
  const getVisibleCategoryData = makeGetVisibleCategoryData();
  return (state) => {
    data = getVisibleCategoryData(state, ownProps);
    if (category === 'concerts') {
      data = getVisibleConcerts(state);
    }
    const selectedItemsCount = state.filtersData.selectedData[category].length;
    return {
      data,
      category,
      selectedItemsCount,
    };
  };
};

CategoryFilter.propTypes = propTypes;
export default connect(makeMapStateToProps, {})(CategoryFilter);
