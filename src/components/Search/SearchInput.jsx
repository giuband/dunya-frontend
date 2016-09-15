import React from 'react';
import { connect } from 'react-redux';
import { toggleFocus, showSearchTooltip, hideSearchTooltip } from 'actions/search';
import { toggleSelectedEntry } from 'actions/filtersData';
import { getAllSelectedEntries, getEntryId }
  from 'selectors/filtersData';
import SearchTooltip from './SearchTooltip';
import SearchOverviewEntry from './SearchOverviewEntry';
import ShowMobileMenu from '../MobileMenu/ShowMobileMenu';
import { breakpoints } from 'json!../../stylesheets/variables.json';

const breakpoint = parseInt(breakpoints.medium, 10);

const propTypes = {
  allSelectedItems: React.PropTypes.array,
  showSearchTooltip: React.PropTypes.func,
  hideSearchTooltip: React.PropTypes.func,
  toggleSelectedEntry: React.PropTypes.func,
  toggleFocus: React.PropTypes.func,
  isFocused: React.PropTypes.bool,
  windowSize: React.PropTypes.object,
};

const shouldShowSearchTooltip = false;
const longPlaceHolder = 'Search by recording name or by selected filters';
const shortPlaceHolder = 'Search recordings';

const onInputChange = (evt, props) => {
  const inputContent = evt.target.value;
  if (inputContent.length) {
    props.hideSearchTooltip();
  } else {
    props.showSearchTooltip();
  }
};

const unselectLatestEntry = (props) => {
  const entry = props.allSelectedItems[props.allSelectedItems.length - 1];
  if (entry) {
    props.toggleSelectedEntry(getEntryId(entry), entry.category);
  }
};

const SearchInput = (props) => {
  const isFilteredSearch = props.allSelectedItems.length > 0;
  const tooltip = (shouldShowSearchTooltip) ? <SearchTooltip /> : null;
  let placeHolder = '';
  if (!isFilteredSearch) {
    placeHolder = (props.windowSize.width < breakpoint) ? shortPlaceHolder : longPlaceHolder;
  }
  const selectedItems = props.allSelectedItems.map(entry =>
    <SearchOverviewEntry key={getEntryId(entry)} entry={entry} />);
  return (
    <ol className={`SearchInput${(props.isFocused) ? ' focus' : ''}`}>
      <li>
        <button className="SearchInput__search-button" type="submit">
          <i className="fa fa-lg fa-search" aria-hidden />
        </button>
      </li>
      {selectedItems}
      <li>
        <input
          id="search"
          className="SearchInput__input"
          type="search"
          placeholder={placeHolder}
          onChange={evt => onInputChange(evt, props)}
          onFocus={props.toggleFocus}
          onBlur={props.toggleFocus}
          onKeyDown={(evt) => {
            if (evt.keyCode === 8 && !evt.target.value) {
              // unselect latest entry when user presses delete key
              unselectLatestEntry(props);
            }
          }}
        />
      </li>
      <ShowMobileMenu />
      {tooltip}
    </ol>
  );
};

const mapStateToProps = (state) => {
  const allSelectedItems = getAllSelectedEntries(state);
  const { isFocused } = state.search;
  const { windowSize } = state;
  return { allSelectedItems, isFocused, windowSize };
};

SearchInput.propTypes = propTypes;
export default connect(mapStateToProps, {
  toggleFocus,
  toggleSelectedEntry,
  showSearchTooltip,
  hideSearchTooltip,
})(SearchInput);
