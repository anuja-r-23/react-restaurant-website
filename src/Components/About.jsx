import React from 'react';
import aboutimage from '../images/about.png';

const About = () => {
  return (
    <div id='about'>
      <div className="about-text">
        <h1>More Flavors</h1>
        <p>Get ready for an unforgettable culinary experience! Join us for our upcoming events where delectable flavors and lively ambiance come together to create memorable moments for you and your loved ones.</p>
        <button>Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
    </div>
  )
}

export default About;
