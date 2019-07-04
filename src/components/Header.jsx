import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
        div {
          font-family: Arial, Helvetica, sans-serif;
          text-align: center;
          text-transform: uppercase;
        }

        img {
          max-width: 100%;
        }
        `}</style>
      <h1>Tha Dopest Farmer's Market</h1>
      <Link to="/">Home</Link> | <Link to="/schedule">Schedule</Link> | <Link to="/seasonal-produce">Seasonal Produce</Link> | <Link to="/about">About</Link>
    </div>
  );
}

export default Header;