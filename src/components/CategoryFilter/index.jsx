import React from 'react';
import { connect } from 'react-redux';
import CategoryFilterList from './CategoryFilterList';
import SearchOverviewEntry from '../Search/SearchOverviewEntry';
import { makeGetVisibleCategoryData, makeGetVisibleSelected, getEntryId,
  makeGetDetailsForEntry } from '../../selectors/filtersData';
import { SHOW_ONLY_VISIBLE_SELECTED } from '../../constants';
import './CategoryFilterSelectedList.scss';
import sortByName from '../../utils/sortByName';

const propTypes = {
  category: React.PropTypes.string,
  data: React.PropTypes.array,
  selected: React.PropTypes.array,
  selectedItemsCount: React.PropTypes.number,
};

// TODO: don't use <details> as not well supported in Firefox, use action toggleExpandCategory
const CategoryFilter = (props) => {
  const enrichedEntries = props.selected.map(entry =>
    Object.assign({}, entry, { category: props.category }));
  const sortedEntries = enrichedEntries.sort(sortByName);
  return (
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
          <header className="CategoryFilter__category-section-header">Available</header>
          <CategoryFilterList data={props.data} category={props.category} />
        </section>
        <section>
          <header className="CategoryFilter__category-section-header">Selected</header>
          <div className="CategoryFilter__category-catalogue-list">
            {sortedEntries.map(entry =>
              <SearchOverviewEntry key={getEntryId(entry)} entry={entry} />)}
          </div>
        </section>
      </details>
    </div>
  );
};

const makeMapStateToProps = (_, ownProps) => {
  const { category } = ownProps;
  let { data } = ownProps;
  const getVisibleCategoryData = makeGetVisibleCategoryData();
  const getVisibleSelected = makeGetVisibleSelected();
  const getDetailsForEntry = makeGetDetailsForEntry();
  return (state) => {
    data = getVisibleCategoryData(state, ownProps);
    const visibleSelected = getVisibleSelected(state, ownProps);
    const allSelected = getDetailsForEntry(state, ownProps);
    const selected = (SHOW_ONLY_VISIBLE_SELECTED) ?
      visibleSelected : allSelected;
    const selectedItemsCount = selected.length;
    return {
      data,
      selected,
      category,
      selectedItemsCount,
    };
  };
};

CategoryFilter.propTypes = propTypes;
export default connect(makeMapStateToProps, {})(CategoryFilter);
