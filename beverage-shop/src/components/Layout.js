import React, { useState, useEffect } from 'react';
import DrinksList from './DrinksList';
import SearchBar from './SearchBar';

const Layout = () => {
  const [drinks, setDrinks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  // Fetch initial list of drinks
  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then(response => response.json())
      .then(data => setDrinks(data.drinks || []));
  }, []);

  // Handle search
  const handleSearch = (searchTerm) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then(response => response.json())
      .then(data => setSearchResults(data.drinks || []));
  };

  return (
    <div>
      <header className="bg-gray-800 text-white p-4 text-center text-xl">
        Beverage Shop
      </header>
      <SearchBar onSearch={handleSearch} />
      <div className="p-4">
        {searchResults.length > 0 ? (
          <DrinksList drinks={searchResults} />
        ) : (
          <DrinksList drinks={drinks} />
        )}
      </div>
    </div>
  );
};

export default Layout;
