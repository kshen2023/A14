import React from 'react';
import styled from 'styled-components';
import meImage from '../../assets/me.png'; // Adjust the path as needed

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  border-radius: 8px;
  background-size: cover;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start; /* Align items to the start of the container */
  padding: 40px; /* Add padding for better spacing */
`;

const ColumnImage = styled.div`
  flex: 1;
  max-width: 600px;

  img {
    width: 100%;
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    }
  }
`;

const Content = styled.div`
  flex: 2;
  max-width: calc(100% - 540px);

  h2 {
    font-size: 26px;
    margin-top: 20px;
    color: #f1f1f1;
    font-family: 'Arial', sans-serif;


  }

  p {
    font-size: 18px;
    font-family:'Montserrat', sans-serif;
    font-weight: 300;
    line-height: 1.8;
    margin-bottom: 20px;
    color: #e0e0e0;
    text-align: justify;
    position: relative; /* Ensure pseudo-element is positioned correctly */
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
  }

  p::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2); /* Subtle overlay for hover effect */
    z-index: -1; /* Place it behind the text */
    transition: opacity 0.3s ease;
    opacity: 0;
  }

  p:hover::before {
    opacity: 1;
  }
`;

const About: React.FC = () => {
  return (
    <Container>
      <Row>
        <ColumnImage>
          <img src={meImage} alt="Gilbert photo" />
        </ColumnImage>
        <Content>
          <h2>About Me</h2>
          <p>
            I'm Kang Shen, a passionate and innovative web designer and developer. My journey in the world of web design started with a deep fascination for how technology can be seamlessly integrated with artistic expression. Over the years, I've honed my skills in creating visually stunning and highly functional websites that not only meet but exceed client expectations.
          </p>
          <h2>Coding Practice</h2>
          <p>
            My approach to web design is rooted in a strong understanding of user experience and a commitment to staying ahead of industry trends. I thrive on challenges and am always eager to learn and implement new technologies to enhance my work. Whether it's through responsive design, intuitive navigation, or engaging content, my goal is to create digital experiences that leave a lasting impact.
          </p>
          <h2>Technical Skills</h2>
          <p>
            With a strong foundation in HTML, CSS, and JavaScript, I specialize
            in creating responsive and modern websites. I am well-versed in
            utilizing frameworks like Bootstrap to ensure cross-browser
            compatibility and a consistent design across various devices.
          </p>

        </Content>
      </Row>
    </Container>
  );
};

export default About;
