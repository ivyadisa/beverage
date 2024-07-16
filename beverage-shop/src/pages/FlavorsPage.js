import React from 'react';
import '../styles/flavors.css'; // Import your styles

const FlavorsPage = () => {
  return (
    <div className="flavors-container">
      <h1 className="text-3xl font-bold">Flavors</h1>
      <div className="flavors-grid">
        <div className="flavor-card">
          <img src="/images/mango.png" alt="Mango" />
          <h2 className="flavor-name">Mango</h2>
        </div>
        <div className="flavor-card">
          <img src="/images/orange.png" alt="Orange" />
          <h2 className="flavor-name">Orange</h2>
        </div>
         <div className="flavor-card">
          <img src="/images/strawberry.png" alt="Strawberry" />
          <h2 className="flavor-name">Strawberry</h2>
        </div>
        <div className="flavor-card">
          <img src="/images/lemon.jpg" alt="Lemon" />
          <h2 className="flavor-name">Lemon</h2>
        </div>
        <div className="flavor-card">
          <img src="/images/apple.png" alt="Apple" />
          <h2 className="flavor-name">Apple</h2>
        </div>
        <div className="flavor-card">
          <img src="/images/passion.png" alt="Passion" />
          <h2 className="flavor-name">Passion</h2>
        </div>
        <div className="flavor-card">
          <img src="/images/coconut.png" alt="Coconut" />
          <h2 className="flavor-name">Coconut</h2>
        </div>
        <div className="flavor-card">
          <img src="/images/watermelon.png" alt="watermelon" />
          <h2 className="flavor-name">Watermelon</h2>
        </div>
      </div>
    </div>
  );
};

export default FlavorsPage;
