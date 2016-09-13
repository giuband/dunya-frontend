import React from 'react';
import { connect } from 'react-redux';
import { toggleSelectedEntry } from '../../actions/filtersData';

const propTypes = {
  name: React.PropTypes.string,
  category: React.PropTypes.string,
  isSelected: React.PropTypes.bool,
  toggleSelectedEntry: React.PropTypes.func,
};

const CategoryFilterEntry = (props) => (
  <a
    key={props.name}
    className={`CategoryFilter__category-entry${(props.isSelected) ? ' active' : ''}`}
    tabIndex="0"
    onClick={() => props.toggleSelectedEntry(props.name, props.category)}
  >{props.name}</a>
);

const makeMapStateToProps = (_, ownProps) => {
  const { name, category } = ownProps;
  return (state) => {
    const isSelected = state.filtersData.selectedData[category].includes(name);
    return {
      name,
      category,
      isSelected,
    };
  };
};

CategoryFilterEntry.propTypes = propTypes;
export default connect(makeMapStateToProps, { toggleSelectedEntry })(CategoryFilterEntry);
