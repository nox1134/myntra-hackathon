import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div className='py-5 mr-5 ml-5'>
    <div className="flex items-center bg-white p-2 rounded-full shadow-md  hover:bg-gray-100">
      <FontAwesomeIcon icon={faSearch} className="text-gray-500 ml-3" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent p-2 text-foreground placeholder-muted-foreground outline-none flex-1 ml-3 transition-colors"
        style={{ border: 'none', boxShadow: 'none' }}
      />
    </div>
    </div>
  );
};

export default Search;
