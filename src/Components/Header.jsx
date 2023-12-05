import React from 'react';

function Header() {
  return (
    <div id='main'>
      <div className="header-heading">
        <h3>Where Flavor Meets Elegance</h3>
        <h1><span>Burger</span>&<br/>Flavors</h1>
        <p className='details'>Savor perfection,where every dish is a masterpiece of flavor.</p>
        <div className="header-btns">
          <a href='#' className='header-btn'>order</a>
        </div>
      </div>
    </div>
  )
}

export default Header;
