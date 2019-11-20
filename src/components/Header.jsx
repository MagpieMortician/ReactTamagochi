import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Tamagotchi</h1>
      <Link to="/">Home</Link> | <Link to="/tamagotchi">Play</Link>
    </div>
  );
}

export default Header;