import React from 'react';
import { connect } from 'react-redux';
import { makeGetDetailsForEntry, getEntryId } from '../../selectors/filtersData';

const propTypes = {
  category: React.PropTypes.string,
  selected: React.PropTypes.array,
};

const CategoryFilterSelectedList = props => (
  <div className="CategoryFilter__category-selected-entries-list">
    {(props.selected.length) ?
    props.selected.map(selected => <div key={getEntryId(selected)}>{selected.name}</div>)
    : `No ${props.category} selected`
    }
  </div>
);

const makeMapStateToProps = (_, ownProps) => {
  const { category } = ownProps;
  const getDetailsForEntry = makeGetDetailsForEntry();
  return (state) => {
    const selected = getDetailsForEntry(state, ownProps);
    return {
      category,
      selected,
    };
  };
};

CategoryFilterSelectedList.propTypes = propTypes;
export default connect(makeMapStateToProps, {})(CategoryFilterSelectedList);
