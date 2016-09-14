import React from 'react';
import { connect } from 'react-redux';
import { toggleSelectedEntry } from '../../actions/filtersData';
import { getEntryId, makeIsEntrySelected } from '../../selectors/filtersData';

const propTypes = {
  category: React.PropTypes.string,
  isSelected: React.PropTypes.bool,
  toggleSelectedEntry: React.PropTypes.func,
  entry: React.PropTypes.object,
};

const CategoryFilterEntry = props => (
  <a
    key={getEntryId(props.entry)}
    className={`CategoryFilter__category-entry${(props.isSelected) ? ' active' : ''}`}
    tabIndex="0"
    onClick={() => props.toggleSelectedEntry(getEntryId(props.entry), props.category)}
  >{props.entry.name}</a>
);

const makeMapStateToProps = (_, ownProps) => {
  const { entry, category } = ownProps;
  const isEntrySelected = makeIsEntrySelected(entry);
  return (state) => {
    const isSelected = isEntrySelected(state, ownProps);
    return {
      name,
      category,
      isSelected,
      entry,
    };
  };
};

CategoryFilterEntry.propTypes = propTypes;
export default connect(makeMapStateToProps, { toggleSelectedEntry })(CategoryFilterEntry);
