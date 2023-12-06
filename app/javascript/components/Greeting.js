import React, { useEffect, useState } from 'react';
import { getRandomGreeting } from '../api';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    getRandomGreeting().then((data) => setGreeting(data.message));
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
