import React from 'react';
import { connect } from 'react-redux';
import { toggleSelectedEntry } from '../../actions/filtersData';

const propTypes = {
  name: React.PropTypes.string,
  category: React.PropTypes.string,
  toggleSelectedEntry: React.PropTypes.func,
};

const CategoryFilterEntry = (props) => (
  <a
    key={props.name}
    className="CategoryFilter__category-entry"
    tabIndex="0"
    onClick={() => props.toggleSelectedEntry(props.name, props.category)}
  >{props.name}</a>
);

const makeMapStateToProps = (_, ownProps) => {
  const { category } = ownProps;
  return () => ({
    category,
  });
};

CategoryFilterEntry.propTypes = propTypes;
export default connect(makeMapStateToProps, { toggleSelectedEntry })(CategoryFilterEntry);
