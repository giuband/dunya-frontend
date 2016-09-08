import React from 'react';
import Search from '../Search';
import RefineSearch from './RefineSearch';
import '../../stylesheets/Sidebar.scss';

const Sidebar = () => (
  <aside className="Sidebar">
    <Search />
    <RefineSearch />
  </aside>
);

export default Sidebar;
