import React from 'react';
import { connect } from 'react-redux';
import SearchTooltip from './SearchTooltip';
import SearchOverviewCategory from './SearchOverviewCategory';
import { searchFiltersOverviewWidth } from 'json!../../stylesheets/variables.json';
import { resetCategorySelections } from '../../actions/filtersData';
import { showSearchTooltip, hideSearchTooltip } from '../../actions/search';

const propTypes = {
  selectedData: React.PropTypes.object,
  resetCategorySelections: React.PropTypes.func,
  showSearchTooltip: React.PropTypes.func,
  hideSearchTooltip: React.PropTypes.func,
};

const shouldShowSearchTooltip = false;

const isRefineSearchFiltered = selectedData =>
    Object.keys(selectedData).some(dataKey => selectedData[dataKey].length > 0);

const categorySelections = resetFilters => (
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

const onInputChange = (evt, props) => {
  const inputContent = evt.target.value;
  if (inputContent.length) {
    props.hideSearchTooltip();
  } else {
    props.showSearchTooltip();
  }
};

const SearchInput = (props) => {
  const isFilteredSearch = isRefineSearchFiltered(props.selectedData);
  const inputStyle = getInputStyle(isFilteredSearch);
  const tooltip = (shouldShowSearchTooltip) ? <SearchTooltip /> : null;
  const placeHolder = (isFilteredSearch) ? '' : 'Search by recording name or by selected filters';
  const categoriesFilterOverview = (isFilteredSearch) ?
    Object.keys(props.selectedData).map(category =>
      <SearchOverviewCategory key={category} category={category} />)
    : null;
  return (
    <div className="SearchInput">
      <input
        id="search"
        type="search"
        placeholder={placeHolder}
        style={inputStyle}
        onChange={evt => onInputChange(evt, props)}
        onFocus={() => props.showSearchTooltip()}
        onBlur={() => props.hideSearchTooltip()}
      />
      <div className="CategoriesFilterOverview__container">
        <div className="CategoriesFilterOverview__wrapper">
          {categoriesFilterOverview}
        </div>
      </div>
      {tooltip}
      <button type="submit">
        <i className="fa fa-lg fa-search" aria-hidden />
      </button>
    </div>
  );
};

const mapStateToProps = state => ({ selectedData: state.filtersData.selectedData });

SearchInput.propTypes = propTypes;
export default connect(mapStateToProps, {
  resetCategorySelections,
  showSearchTooltip,
  hideSearchTooltip,
})(SearchInput);
