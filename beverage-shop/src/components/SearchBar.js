import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center space-x-2 p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a drink..."
        className="flex-grow p-2 border rounded"
      />
      <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
