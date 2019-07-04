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
      <h1>It's a tap room</h1>
      <Link to="/">Home</Link> | <Link to="/viewkeg">Keg List</Link>
    </div>
  );
}

export default Header;
