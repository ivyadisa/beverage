import React from 'react';
import '../styles/aboutus.css'; // Import your CSS file for styling
import linkedinLogo from '../images/linkdin.png'; // Import LinkedIn logo image
import facebookLogo from '../images/facebook.png'; // Import Facebook logo image
import instagramLogo from '../images/instagram.png'; // Import Instagram logo image

const AboutUsPage = () => {
  return (
    <div className="about-container">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p>Learn more about our story and mission.</p>

      <div className="about-content">
        <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
        <p>
           Our journey began in the heart of Kenya, where the vibrant culture and rich agricultural heritage
            inspired us to create beverages that capture the essence of our land. Founded in 2021, our company
             started as a small family business with a passion for blending traditional Kenyan flavors with
              modern beverage-making techniques.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p>
           Our mission is to provide high-quality, delicious beverages that celebrate the unique flavors of Kenya.
           We strive to innovate and create drinks that people love, while also giving back to the community and 
           promoting sustainable practices. We believe in making a positive impact through our products, from the 
           source of our ingredients to the final sip.
        </p>

        <h2 className="text-2xl font-semibold mb-2">About Beverages</h2>
        <p>
          Beverages are drinks specifically prepared for human consumption. They can be classified
          into various categories such as non-alcoholic beverages, alcoholic beverages, hot
          beverages, and cold beverages. Each type of beverage serves a different purpose and has a
          unique cultural significance.
        </p>

     {/* Social Media Icons */}
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" className="social-icon" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
