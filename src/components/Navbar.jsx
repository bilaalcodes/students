import React from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <ul className='nav w-100 bg-dark'>
      <li className='nav-item'>
        <NavLink
          to='/home'
          className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}
          // onClick={() => handleNavigate('/home')}
          // className='nav-link text-white'
        >
          Home
        </NavLink>
      </li>
      <li className='nav-item '>
        <NavLink
          to='/login'
          className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}
          // onClick={() => handleNavigate('/login')}
          // className='nav-link text-white'
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
