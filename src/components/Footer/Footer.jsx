import React from 'react';
import styled from 'styled-components';
import { Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterSection = styled.footer`
  background: #000;
  padding: 3rem 0;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/footer-background.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  
  @media (min-width: 2000px) {
    background-size: 100% auto;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const LogoContainer = styled.div`
  margin-bottom: 2rem;
`;

const LogoImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100px;
    height: 100px;
  }
`;

const LogoText = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.light[100]};
  margin-top: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

// Создаем стилизованный компонент для Link из react-router-dom
const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.light[200]};
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 1.1rem;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

// Оставляем обычную ссылку для внешних URL
const NavLink = styled.a`
  color: ${props => props.theme.colors.light[200]};
  font-weight: 500;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 1.1rem;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

const TelegramButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light[100]};
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: #ea580c;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.light[300]};
  margin-top: 2rem;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Footer = () => {
  return (
    <FooterSection>
      <BackgroundImage />
      
      <Container>
        <LogoContainer>
          <LogoImage 
            src="/photo.png" 
            alt="123 ОМсБр бригада Самарканда"
            onError={(e) => {
              e.target.style.display = 'none';
              const placeholder = document.createElement('div');
              placeholder.style.cssText = `
                width: 120px; 
                height: 120px; 
                background: ${theme.colors.secondary}; 
                border-radius: 8px; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                color: white; 
                font-weight: bold;
                margin: 0 auto;
              `;
              placeholder.textContent = '123';
              e.target.parentNode.appendChild(placeholder);
            }}
          />
          <LogoText>123 ОМсБр бригада "Самарканда"</LogoText>
        </LogoContainer>

        <NavLinks>
          {/* Используем StyledLink для внутренних маршрутов */}
          <StyledLink to="/about">О бригаде</StyledLink>
          {/* Оставляем NavLink для якорных ссылок или внешних URL */}
          <NavLink href="#recruitment">Присоединиться к бригаде</NavLink>
        </NavLinks>

        <TelegramButton 
          href="https://t.me/Tiimy_Turner17" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Написать в Telegram"
        >
          <Send size={20} />
          Написать в Telegram
        </TelegramButton>

        <Copyright>
          © {new Date().getFullYear()} 123 ОМсБр бригада "Самарканда". Все права защищены.
        </Copyright>
      </Container>
    </FooterSection>
  );
};

const theme = {
  colors: {
    secondary: '#f97316'
  }
};

export default Footer;