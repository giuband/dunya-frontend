import React from 'react';
import Search from '../Search';
import Results from '../Results';
import './MainBody.scss';

const MainBody = () => (
  <div className="MainBody">
    <Search />
    <Results />
  </div>
);

export default MainBody;
