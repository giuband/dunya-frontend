import React from 'react';
import { connect } from 'react-redux';
import { resetCategorySelections } from '../../actions/filtersData';
import { makeGetDetailsForEntry, getEntryId, makeGetVisibleSelected }
  from '../../selectors/filtersData';
import pluralize from '../../utils/pluralRules';
import { SHOW_ONLY_VISIBLE_SELECTED } from '../../constants';

const propTypes = {
  category: React.PropTypes.string,
  selected: React.PropTypes.array,
  visibleSelected: React.PropTypes.array,
  resetCategorySelections: React.PropTypes.func,
};

const SearchOverviewCategory = (props) => {
  const selectedItems = (SHOW_ONLY_VISIBLE_SELECTED) ?
    props.visibleSelected : props.selected;
  if (!selectedItems.length) {
    return null;
  }
  let content;
  if (selectedItems.length === 1) {
    content = selectedItems[0].name;
  } else {
    content = `${selectedItems.length} ${pluralize(props.category, selectedItems.length)}`;
  }
  return (
    <div className="SearchOverviewCategory">{content}</div>
  );
};

const makeMapStateToProps = (_, ownProps) => {
  const { category } = ownProps;
  const getVisibleSelected = makeGetVisibleSelected();
  const getDetailsForEntry = makeGetDetailsForEntry();
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

SearchOverviewCategory.propTypes = propTypes;
export default connect(makeMapStateToProps, { resetCategorySelections })(SearchOverviewCategory);
