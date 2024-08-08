// src/components/Footer/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  text-align: center;
  font-size: 12px;
  color: white; 
 background-color: rgb(90, 164, 171);
  padding: 10px;

  a {
    color: rgb(0, 0, 0);
    font-size: 20px;
    padding: 10px;
    text-decoration: none;
  }

  a:hover {
    color: white;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <a href="index.html">Home</a>
      <a href="about.html">About Me</a>
      <a href="contact.html">Contact</a>
      <p>Copyright &copy; 2024 My Portfolio</p>
      <p>Kang Shen</p>
    </FooterStyled>
  );
};

export default Footer;
