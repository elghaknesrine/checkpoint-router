import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
<h1>nav</h1>

<ul>
    
<Link to={'/123' }><li>comp1</li></Link>
<Link to={'/111'}><li>comp2</li></Link>
<li>comp3</li>
</ul>



    </div>
  )
}

export default NavBar