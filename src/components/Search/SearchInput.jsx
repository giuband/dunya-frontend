import React from 'react';
import { connect } from 'react-redux';
import pluralize from '../../utils/pluralRules';
import { searchFiltersOverviewWidth } from 'json!../../stylesheets/variables.json';
import { resetCategorySelections } from '../../actions/filtersData';

const propTypes = {
  selectedData: React.PropTypes.object,
  resetCategorySelections: React.PropTypes.func,
};

const isRefineSearchFiltered = (selectedData) =>
    Object.keys(selectedData).some(dataKey => selectedData[dataKey].length > 0);

const categorySelections = (resetFilters) => (
  <div className="SearchInput__filters-overview">
    Filters
    <button
      className="SearchInput__filters-overview__reset-button"
      onClick={(evt) => {
        evt.stopPropagation();
        resetFilters();
      }}
    />
  </div>
);

const getInputStyle = (isFilteredSearch) => {
  if (isFilteredSearch) {
    return { paddingLeft: parseInt(searchFiltersOverviewWidth, 10) + 5 };
  }
  return {};
};

const SearchInput = (props) => {
  const isFilteredSearch = isRefineSearchFiltered(props.selectedData);
  const inputStyle = getInputStyle(isFilteredSearch);
  const placeHolder = (isFilteredSearch) ? '' : 'Search for recordings';
  return (
    <div className="SearchInput">
      <input
        id="search"
        type="search"
        placeholder={placeHolder}
        style={inputStyle}
      />
      {(isFilteredSearch) ? categorySelections(props.resetCategorySelections) : null}
      <button type="submit">
        <i className="fa fa-lg fa-search" aria-hidden />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({ selectedData: state.filtersData.selectedData });

SearchInput.propTypes = propTypes;
export default connect(mapStateToProps, { resetCategorySelections })(SearchInput);
