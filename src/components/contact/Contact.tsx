// src/components/contact/Contact.tsx
import React from 'react';
import styled from 'styled-components';

const ContactStyled = styled.div`
  padding: 20px;
  text-align: center;
  color: white;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
  }

  p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .form-container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #1f2937;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }

  .form-group {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #d1d5db;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #374151;
    border-radius: 0.375rem;
    background-color: #111827;
    color: #f9fafb;
    outline: none;
    transition: border-color 0.2s;
  }

  input:focus,
  textarea:focus {
    border-color: #3b82f6;
  }

  button {
    width: 100%;
    padding: 0.75rem;
    background-color: #3b82f6;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #2563eb;
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactStyled>
      <h1></h1>
      <p></p>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Your Message"
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </ContactStyled>
  );
};


export default Contact;
