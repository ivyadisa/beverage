import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 text-center text-lg z-50">
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/flavors">Flavors</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      <div className="pt-16 p-4"> {/* Adjust top padding to avoid content being hidden behind the navbar */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
