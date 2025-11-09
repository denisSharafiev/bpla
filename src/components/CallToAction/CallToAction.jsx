import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #000;
  position: relative;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/back_section.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  /* Затемнение фона */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 2;
  text-align: center;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TextLine = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${props => props.theme.colors.light[100]};
  margin: 0;
  line-height: 1.3;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`;

const AccentText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
`;

const AccentLine = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.gray[400]};
  margin: 0;
  line-height: 1.2;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const FinalText = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.theme.colors.light[100]};
  margin: 2rem 0 0 0;
  line-height: 1.2;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`;

const CallToAction = () => {
  return (
    <Section id="join">
      {/* Фоновая картинка с затемнением */}
      <BackgroundImage />
      
      <Container>
        <TextContent>
          <MainText>
            <TextLine>Даём отношение.</TextLine>
            <TextLine>Полное сопровождение.</TextLine>
            <TextLine>Мужчины в приоритете.</TextLine>
            <TextLine>Гарантируем полную подготовку личного состава.</TextLine>
            <TextLine>Полностью обеспечиваем имуществом.</TextLine>
          </MainText>

          {/* Акцентный текст без рамки */}
          <AccentText>
            <AccentLine>Защити свой дом!</AccentLine>
            <AccentLine>Защити свою семью!</AccentLine>
          </AccentText>

          {/* Финальный текст без разделительной полоски */}
          <FinalText>Присоединяйся к своим!</FinalText>
        </TextContent>
      </Container>
    </Section>
  );
};

export default CallToAction;