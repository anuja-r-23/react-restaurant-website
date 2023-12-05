import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';

const Products = () => {
  return (
    <div>
      <div id="products">
        <h1>Meet & Mealt</h1>
        <p>Discover the perfect harmony of 'Meet and Mealt' at our restaurant, where delectable dishes and delightful gatherings come together to create memorable dining experiences</p>
        <div className="a-container">
            <Productbox image={pimage1} title="Caprese Burger" />
            <Productbox image={pimage2} title="Double or Triple Stack" />
            <Productbox image={pimage1} title="Pimento Cheese Burger" />
        </div>
      </div>
    </div>
  )
}

export default Products;
