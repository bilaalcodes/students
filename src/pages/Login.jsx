import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({ name: 'bilal', age: '22' });
  const handleNavigate = () => {
    navigate('/home', { state: state, replace: true });
  };
  return (
    <div className='mt-3'>
      Welcome to Login Page
      <button onClick={handleNavigate} className='btn btn-primary btn-sm mx-1'>
        Go home with state
      </button>
    </div>
  );
};

export default Login;
