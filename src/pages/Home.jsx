import React from 'react';
import { useLocation } from 'react-router';

const Home = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h4>
        Welcome to Home Page and the state data is {state?.name} {state?.age}
      </h4>
    </div>
  );
};

export default Home;
