import React from 'react';

const Contact = () => {
  return (
    <div id='contact'>
      <h1>Lock in Your Reservation</h1>
      <form>
        <input type="text" placeholder='Full Name'/>
        <input type="email" placeholder='Type Your E-mail'/>
        <textarea placeholder='Write Here...'></textarea>
        <input type='Submit' value='Book'/>
      </form>
    </div>
  )
}

export default Contact;
