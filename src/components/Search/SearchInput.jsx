import React from 'react';

const SearchInput = () => (
  <div className="SearchInput">
    <input id="search" type="search" tabIndex="1" />
    <button type="submit" tabIndex="2">
      <i className="fa fa-lg fa-search" aria-hidden />
    </button>
  </div>
);

export default SearchInput;
