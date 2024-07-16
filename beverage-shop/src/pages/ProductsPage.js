import React, { useState, useEffect, useCallback } from 'react';
import DrinksList from '../components/DrinksList'; 
import SearchBar from '../components/SearchBar'; 
import { ClipLoader } from 'react-spinners';

const ProductPage = () => {
  const [drinks, setDrinks] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDrinks();
  }, []);

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
      const data = await response.json();
      setDrinks(data.drinks || []);
      setFilteredDrinks(data.drinks || []);
    } catch (error) {
      console.error('Error fetching drinks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = useCallback(
    debounce(async (searchTerm) => {
      setLoading(true);
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        const data = await response.json();
        setFilteredDrinks(data.drinks || []);
      } catch (error) {
        console.error('Error searching drinks:', error);
      } finally {
        setLoading(false);
      }
    }, 300),
    []
  );

  return (
    <div className="container mx-auto mt-8">
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <div className="flex justify-center items-center mt-4">
          <ClipLoader size={50} color="#FF6600" />
        </div>
      ) : filteredDrinks.length > 0 ? (
        <DrinksList drinks={filteredDrinks} />
      ) : (
        <p className="text-xl mt-4">No drinks found.</p>
      )}
    </div>
  );
};

export default ProductPage;

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
