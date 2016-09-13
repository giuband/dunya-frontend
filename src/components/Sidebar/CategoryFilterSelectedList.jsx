import React from 'react';
import { connect } from 'react-redux';
import CategoryFilterSelectedEntry from './CategoryFilterSelectedEntry';
import { makeGetDetailsForEntry, getEntryId } from '../../selectors/filtersData';
import '../../stylesheets/CategoryFilterSelected.scss';

const propTypes = {
  category: React.PropTypes.string,
  selected: React.PropTypes.array,
};

const CategoryFilterSelectedList = (props) => {
  let content;
  if (!props.selected.length) {
    content = (
      <div
        className="CategoryFilterSelectedList__no-selections-warning"
      >
        {`No ${props.category} selected`}
      </div>);
  } else {
    content = props.selected.map(selected =>
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
