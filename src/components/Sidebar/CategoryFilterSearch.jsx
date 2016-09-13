import React from 'react';
import { connect } from 'react-redux';
import pluralize from '../../utils/pluralRules';
import { setSearchCategory } from '../../actions/filtersData';

const propTypes = {
  category: React.PropTypes.string,
  setSearchCategory: React.PropTypes.func,
};

const updateCategorySearch = (evt, props) => {
  const search = evt.target.value;
  props.setSearchCategory(search, props.category);
};

const CategoryFilterSearch = props => (
  <div className="CategoryFilter__category-catalogue-search">
    <input
      type="text"
      placeholder={`Enter ${pluralize(props.category, 1)} name`}
      onChange={evt => updateCategorySearch(evt, props)}
    />
  </div>
);

const makeMapStateToProps = (_, ownProps) => {
  const { category } = ownProps;
  return (state) => {
    const currentSearch = state.filtersData.searchedData[category];
    return { category, currentSearch };
  };
};

CategoryFilterSearch.propTypes = propTypes;
export default connect(makeMapStateToProps, { setSearchCategory })(CategoryFilterSearch);
