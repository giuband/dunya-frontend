import React from 'react';
import Search from '../Search';
import Results from '../Results';
import './MainBody.scss';

const MainBody = () => (
  <div className="MainBody">
    <section className="MainBody__Item">
      <Search />
    </section>
    <section className="MainBody__Item">
      <Results />
    </section>
  </div>
);

export default MainBody;
