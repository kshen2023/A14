import React from 'react';
import styled from 'styled-components';
import design from '../../assets/design.jpg';
import design2 from '../../assets/design2.jpg';
import design3 from '../../assets/design3.jpg';

const SectionStyled = styled.section`
  background-color: #000;  /* Use hex code for consistency */
  background-size: cover;
  background-position: center;
  color: #fff;  /* Use hex code for consistency */
  padding: 40px 20px;  /* Increased top and bottom padding for better spacing */
  text-align: center;

  h2 {
    font-size: 4rem;  /* Use rem for better scalability */
    text-transform: capitalize;
    margin-top: 30px;
    margin-bottom: 20px;  /* Added bottom margin for spacing */
    font-weight: 700;  /* Make the font bold */
  }

  p {
    font-size: 1.5rem;  /* Use rem for better scalability */
    width: 70%;
    margin: auto;
    font-weight: 300;
    line-height: 1.6;  /* Increase line height for better readability */
    margin-bottom: 40px;  /* Adjusted bottom margin for consistency */
  }

  .image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;  /* Use gap for better spacing management */
    margin: 20px 0;
  }

  .image-container img {
    width: calc(33.33% - 10px);
    margin-bottom: 10px;
    border-radius: 10px;  /* Increased border-radius for a smoother look */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);  /* Subtle shadow for better depth */
    transition: transform 0.3s ease, box-shadow 0.3s ease;  /* Smooth transition */
  }

  .image-container img:hover {
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.5), 0 8px 30px rgba(255, 255, 255, 0.5);
    transform: scale(1.05);
  }
`;


type SectionProps = {
  children?: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <SectionStyled>
      {children || (
        <>
          <h2>
            HI, I’M KANG SHEN <br />
            Aspiring Web Designer & Developer
          </h2>
          <p>
            Hi there! I'm Kang Shen, a passionate and aspiring web designer with a drive to infuse creativity and innovation into the digital space. While I may be new to this field, my commitment to learning and crafting visually appealing, functional websites knows no bounds.
          </p>
          <div className="image-container">
            <img src={design} alt="Image 1" />
            <img src={design2} alt="Image 2" />
            <img src={design3} alt="Image 3" />
          </div>
        </>
      )}
    </SectionStyled>
  );
};

export default Section;
