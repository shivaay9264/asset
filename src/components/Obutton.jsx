import React from 'react';

const Obutton = () => (
  <button
    style={{
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer'
    }}
    onClick={() => {
      // Your click handler function
      console.log('Button clicked');
    }}
  >
    Buy
  </button>
);
export default Obutton;
