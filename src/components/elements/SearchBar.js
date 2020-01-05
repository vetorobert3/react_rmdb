import React from 'react';
import FontAwesome from 'react-fontawesome';

import { 
  StyledSearchBar, 
  StyledSearchBarContent 
} from '../styles/StyledSearchBar';

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <FontAwesome className='fa-search' name='search' size='2x' />
        <input
          tyoe='text'
          placeholder="Search Movie"
          onChange={doSearch}
          value={state}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  )
}

export default SearchBar;