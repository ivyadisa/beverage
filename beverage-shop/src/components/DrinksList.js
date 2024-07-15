import React, { useState, useEffect } from 'react';

const DrinksList = ({ drinks }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {drinks.map(drink => (
        <div key={drink.idDrink} className="border p-4 rounded-lg">
          <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl mt-2">{drink.strDrink}</h2>
        </div>
      ))}
    </div>
  );
};

export default DrinksList;
