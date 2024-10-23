// Import React and useState, useEffect
import React, { useState, useEffect } from 'react';

const NotHome = () => {
  console.log('Rendering NotHome Component');
  // Use useState to create a counter state variable, initialized to 0
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('');

  // Function to increase the counter
  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  // Function to decrease the counter
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  // Use useEffect to reset the counter if it goes below 0 and show a message if it exceeds 5
  useEffect(() => {
    if (counter < 0) {
      setCounter(0);
    }

    if (counter > 5) {
      setMessage('You passed 5!');
    } else {
      setMessage('');
    }
  }, [counter]); // Dependency array ensures this effect runs when `counter` changes

  return (
    <div>
      <h1>This is the NotHome Page</h1>
      <p>Counter: {counter}</p>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default NotHome;
