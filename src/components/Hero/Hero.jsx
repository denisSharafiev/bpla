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

const HeroVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const Hero = () => {
  const videoUrl = "https://dl.dropbox.com/scl/fi/vpwq1himafbdjy0xwuvly/IMG_4728.MP4?rlkey=71r7d6tj5byrujti0szldot1f&st=qbe7cp8h&dl=0";

  return (
    <HeroSection>
      <HeroVideo 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
      >
        <source src={videoUrl} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </HeroVideo>
    </HeroSection>
  );
};

export default Hero;