import React from 'react';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import './Search.scss';

const Search = () => (
  <div className="Search">
    <label className="Search__label" htmlFor="search">
      <header>Search</header>
      <SearchInput />
    </label>
    <SearchButton />
  </div>
);

export default Search;
