import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background: #000;
  color: ${props => props.theme.colors.white};
  position: relative;
  overflow: hidden;
  height: 100vh; /* Полная высота экрана */
  margin-top: 0; /* Убираем отступ сверху */
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Затемнение 50% */
  z-index: 2;
`;

const Hero = () => {
  // Путь к изображению в папке проекта
  const imageUrl = "./images/photo-heroes1.jpg"; // измени путь на актуальный

  return (
    <HeroSection>
      <HeroImage imageUrl={imageUrl} />
      <DarkOverlay/>
    </HeroSection>
  );
};

export default Hero;