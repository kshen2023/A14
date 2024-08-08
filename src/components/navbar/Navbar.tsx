import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
 background-color: rgb(90, 164, 171);
  padding: 15px 30px;
  
  position: relative;

  ul {
    list-style: none;
    display: flex;
    gap: 30px; /* Increased gap for spacing */
    margin: 0;
    padding: 0;
  }

  li {
    font-size: 16px;
    font-weight: 500;
    position: relative;
    transition: transform 0.3s ease; /* Smooth transform transition */
  }

  a {
    color: #f5f5f5; /* Softer white for links */
    text-decoration: none;
    position: relative;
    padding: 5px 0;
    transition: color 0.3s ease; /* Smooth color transition */
  }

  a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #f5f5f5;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  a:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  li:hover {
    transform: translateY(-3px); /* Slight lift on hover */
  }

  .current-page {
    font-size: 14px;
    color: #f5f5f5;
    background-color: #333;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarStyled>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

    </NavbarStyled>
  );
};

export default Navbar;
