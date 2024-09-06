// src/components/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './Home.css'; // Import the CSS file for styling

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-image">
        {/* <img src="https://raw.githubusercontent.com/balloon4computing/website/home-Nathan/371738840_311163364914337_7566681885053498529_n.webp" alt="SFU SAT team" /> */}
      </div>
      

      <div className="home-content">
        <h1>Making Space Accessible.</h1>
        {/* <p>
          Here at SFU SAT, we’re building more than just a satellite. Join us today to develop your skills, 
          prepare for a future career, and build lasting personal and professional connections within our 
          extensive student and alumni network.
        </p> */}
        <Link to="/contact" className="home-button">Join Us</Link>
      </div>
    </div>
  );
};

export default Home;
