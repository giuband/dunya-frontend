import React from 'react';
import { connect } from 'react-redux';
import { toggleFiltersMenu } from 'actions/mobileMenu';
import './MobileMenu.scss';

const propTypes = {
  toggleFiltersMenu: React.PropTypes.func,
};

const ShowMobileMenu = props =>
  <button className="ShowMobileMenu" onClick={props.toggleFiltersMenu}>
    <i className="fa fa-navicon" aria-hidden />
    Show filters
  </button>;

ShowMobileMenu.propTypes = propTypes;
export default connect(() => ({}), { toggleFiltersMenu })(ShowMobileMenu);
