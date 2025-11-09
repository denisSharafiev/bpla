import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu, X, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background: ${props => props.theme.colors.dark[300]};
  box-shadow: ${props => props.theme.shadows.lg};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid ${props => props.theme.colors.gray[100]};
  font-family: ${props => props.theme.typography.fontFamily.primary};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0 0.5rem;
  }
`;

// Обернем Logo в Link для перехода на главную
const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  font-size: ${props => props.theme.typography.fontSize.xl};
  color: ${props => props.theme.colors.light[100]};
  flex-shrink: 0;
  letter-spacing: ${props => props.theme.typography.letterSpacing.normal};
  text-transform: uppercase;
  text-decoration: none;
  
  &:hover {
    color: ${props => props.theme.colors.light[100]}; /* Сохраняем цвет при наведении */
  }
`;

const LogoImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  object-fit: contain;
  border-radius: 0.5rem;
  border: 2px solid ${props => props.theme.colors.secondary};
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const LogoLine1 = styled.span`
  font-size: 0.9em;
  color: ${props => props.theme.colors.light[100]};
`;

const LogoLine2 = styled.span`
  font-size: 0.9em;
  color: ${props => props.theme.colors.light[100]};
`;

const DesktopNav = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex: 1;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

// Для React Router ссылок (переход между страницами)
const NavLink = styled(Link)`
  color: ${props => props.theme.colors.light[200]};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  transition: all 0.3s ease;
  white-space: nowrap;
  text-decoration: none;
  letter-spacing: ${props => props.theme.typography.letterSpacing.normal};
  text-transform: uppercase;
  font-size: ${props => props.theme.typography.fontSize.base};
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
    transform: translateY(-1px);
  }
`;

// Для якорных ссылок (скролл на той же странице)
const AnchorLink = styled.a`
  color: ${props => props.theme.colors.light[200]};
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;
  text-decoration: none;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
    transform: translateY(-1px);
  }
`;

const TelegramButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light[100]};
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: #ea580c;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  color: ${props => props.theme.colors.light[100]};
  flex-shrink: 0;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.gray[100]};
  width: 100%;
  background: ${props => props.theme.colors.dark[300]};
  border-radius: 0.5rem;
  padding: 1rem;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

const MobileTelegramButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.light[100]};
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-top: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: #ea580c;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const telegramBotUrl = "https://t.me/Tiimy_Turner17";

  return (
    <HeaderContainer>
      <Nav>
        {/* Обернули логотип в Link для перехода на главную */}
        <LogoLink to="/" onClick={() => setIsMenuOpen(false)}>
          <LogoImage 
            src="/photo.png"
            alt="123 омсбр бригада Самарканда"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <LogoText>
            <LogoLine1>123 омсбр</LogoLine1>
            <LogoLine2>бригада "Самарканда"</LogoLine2>
          </LogoText>
        </LogoLink>

        <DesktopNav>
          {/* "О бригаде" ведет на страницу AboutPage */}
          <NavLink to="/about">О бригаде</NavLink>
          
          {/* "Гуманитарное крыло" ведет на страницу HumanitarianPage */}
          <NavLink to="/humanitarian">Гуманитарное крыло</NavLink>
          
          {/* Остальные ссылки - якорные на главной странице */}
          {/* <AnchorLink href="#reviews">События</AnchorLink> */}
          <NavLink to="/join">Присоединиться к бригаде</NavLink>
        </DesktopNav>

        <TelegramButton 
          href={telegramBotUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          title="Написать в Telegram"
        >
          <Send size={20} />
        </TelegramButton>

        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </Nav>

      <MobileMenu isOpen={isMenuOpen}>
        {/* В мобильном меню тоже исправляем ссылки */}
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>О бригаде</NavLink>
        <NavLink to="/humanitarian" onClick={() => setIsMenuOpen(false)}>Гуманитарное крыло</NavLink>
        <NavLink to="/join" onClick={() => setIsMenuOpen(false)}>Присоединиться к бригаде</NavLink>
        <MobileTelegramButton 
          href={telegramBotUrl} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Send size={20} />
          Написать в Telegram
        </MobileTelegramButton>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;