import React from 'react';

const SearchInput = () => (
  <div className="SearchInput">
    <input id="search" type="search" />
    <button type="submit">
      <i className="fa fa-lg fa-search" aria-hidden />
    </button>
  </div>
);

export default SearchInput;
