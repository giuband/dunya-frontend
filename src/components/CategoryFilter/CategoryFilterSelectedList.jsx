import React from 'react';
import { connect } from 'react-redux';
import CategoryFilterSelectedEntry from './CategoryFilterSelectedEntry';
import { makeGetDetailsForEntry, getEntryId, makeGetVisibleSelected }
  from '../../selectors/filtersData';
import sortByName from '../../utils/sortByName';
import './CategoryFilterSelectedList.scss';
import { SHOW_ONLY_VISIBLE_SELECTED } from '../../constants';

const propTypes = {
  category: React.PropTypes.string,
  selected: React.PropTypes.array,
  visibleSelected: React.PropTypes.array,
};

const CategoryFilterSelectedList = (props) => {
  let content;
  const selectedItems = (SHOW_ONLY_VISIBLE_SELECTED) ?
    props.visibleSelected : props.selected;
  const sortedSelectedItems = selectedItems.sort(sortByName);
  if (!sortedSelectedItems) {
    content = (
      <div
        className="CategoryFilterSelectedList__no-selections-warning"
      >
        {`No ${props.category} selected`}
      </div>);
  } else {
    content = sortedSelectedItems.map(selected =>
      <CategoryFilterSelectedEntry
        key={getEntryId(selected)}
        entry={selected}
        category={props.category}
      />
    );
  }
  return (
    <div className="CategoryFilterSelectedList">
      {content}
    </div>
  );
};

const makeMapStateToProps = (_, ownProps) => {
  const { category } = ownProps;
  const getDetailsForEntry = makeGetDetailsForEntry();
  const getVisibleSelected = makeGetVisibleSelected();
  return (state) => {
    const selected = getDetailsForEntry(state, ownProps);
    const visibleSelected = getVisibleSelected(state, ownProps);
    return {
      category,
      selected,
      visibleSelected,
    };
  };
};

CategoryFilterSelectedList.propTypes = propTypes;
export default connect(makeMapStateToProps, {})(CategoryFilterSelectedList);
