import React from 'react';
import { connect } from 'react-redux';
import { toggleSelectedEntry } from '../../actions/filtersData';
import { getEntryId } from '../../selectors/filtersData';

const propTypes = {
  entry: React.PropTypes.object,
  category: React.PropTypes.string,
  toggleSelectedEntry: React.PropTypes.func,
};

const CategoryFilterSelectedEntry = props => (
  <div className="CategoryFilterSelectedEntry">
    <div className="CategoryFilterSelectedEntry__name">
      {props.entry.name}
    </div>
    <button
      onClick={() => props.toggleSelectedEntry(getEntryId(props.entry), props.category)}
      className="CategoryFilterSelectedEntry__remove-entry-button"
    >✕</button>
  </div>
);

CategoryFilterSelectedEntry.propTypes = propTypes;
export default connect(() => ({}), { toggleSelectedEntry })(CategoryFilterSelectedEntry);
