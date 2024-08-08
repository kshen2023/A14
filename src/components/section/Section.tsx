import React from 'react';
import styled from 'styled-components';
import design from '../../assets/design.jpg';
import design2 from '../../assets/design2.jpg';
import design3 from '../../assets/design3.jpg';

const SectionStyled = styled.section`
 background-color: rgb(90, 164, 171);
  color: #f1f1f1;  /* Softer white for text */
  padding: 40px 20px;
  text-align: center;

  h2 {
    font-size: 2rem;  /* Reduced font size */
    text-transform: uppercase;  /* Uppercase for a modern look */
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 600;  /* Slightly lighter font weight */
  
  }

  p {
    font-size: 1.125rem;  /* Reduced font size */
    width: 80%;
    margin: auto;
    font-weight: 300;
    line-height: 1.6;
    margin-bottom: 30px;  /* Adjusted bottom margin */
  }

  .image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    margin: 20px 0;
  }

  .image-container img {
    width: calc(33.33% - 10px);
    margin-bottom: 10px;
    border-radius: 8px;  /* Slightly reduced border-radius */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);  /* More prominent shadow */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .image-container img:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);  /* Darker shadow on hover */
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
