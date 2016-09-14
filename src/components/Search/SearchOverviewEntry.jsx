import React from 'react';
import { connect } from 'react-redux';
import './SearchOverviewEntry.scss';
import { toggleSelectedEntry } from '../../actions/filtersData';
import { getEntryId } from '../../selectors/filtersData';

const propTypes = {
  entry: React.PropTypes.object,
  toggleSelectedEntry: React.PropTypes.func,
};

const SearchOverviewEntry = props =>
  <div className="SearchOverviewEntry">
    <div className="SearchOverviewEntry__entry-name">{props.entry.name}</div>
    <button
      className="SearchOverviewEntry__remove-entry"
      onClick={() => props.toggleSelectedEntry(getEntryId(props.entry), (props.entry.category))}
    />
  </div>;

SearchOverviewEntry.propTypes = propTypes;
export default connect(() => ({}), { toggleSelectedEntry })(SearchOverviewEntry);
