import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/globalStyles';
import { theme } from './theme/theme';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import InfoSection from './components/InfoSection/InfoSection';
import RecruitmentSection from './components/RecruitmentSection/RecruitmentSection';
import AboutPage from './pages/AboutPage/AboutPage';
import CallToAction from './components/CallToAction/CallToAction';
import ConditionsSection from './components/ConditionsSection/ConditionsSection';
import Footer from './components/Footer/Footer';
import HumanitarianPage from './pages/HumanitarianPage/HumanitarianPage';
import JoinPage from './pages/JoinPage/JoinPage';
import SEO from './components/SEO/SEO';

// Базовый URL для GitHub Pages
// Если репозиторий называется "my-website", то basename = "/my-website"
// Если репозиторий называется "username.github.io", то basename = "/"
const BASENAME = process.env.NODE_ENV === 'production' 
  ? '/your-repo-name'  // замените на имя вашего репозитория
  : '';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router basename={BASENAME}>
        {/* Базовый SEO для всего сайта */}
        <SEO />
        
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <InfoSection />
              <RecruitmentSection />
              <CallToAction />
              <ConditionsSection />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <SEO 
                title="О бригаде 'Самарканда' - История и структура 123 ОМсБр"
                description="История формирования 123 отдельной мотострелковой бригады 'Самарканда'. Участие в СВО, структура и вооружение подразделения."
                url="/about"
              />
              <Header />
              <AboutPage />
              <Footer />
            </>
          } />
          <Route path="/humanitarian" element={
            <>
              <SEO 
                title="Гуманитарная помощь 123 Бригаде 'Самарканда'"
                description="Требуется гуманитарная помощь для 123 бригады: БПЛА, медицина, связь, автотехника. Льготы для юридических лиц."
                url="/humanitarian"
              />
              <Header />
              <HumanitarianPage />
              <Footer />
            </>
          } />
          <Route path="/join" element={
            <>
              <SEO 
                title="Присоединиться к 123 Бригаде 'Самарканда' - Условия службы"
                description="Условия контрактной службы в 123 бригаде. Требуются врачи, штурмовики, операторы БПЛА. Подъемные 2.3 млн, ЗП от 220 тыс."
                url="/join"
              />
              <Header />
              <JoinPage />
              <Footer />
            </>
          } />
          
          {/* Добавьте 404 страницу для SPA */}
          <Route path="*" element={
            <>
              <Header />
              <div style={{ 
                textAlign: 'center', 
                padding: '100px 20px',
                minHeight: '50vh'
              }}>
                <h1>404 - Страница не найдена</h1>
                <p>Извините, запрашиваемая страница не существует.</p>
                <a href="/">Вернуться на главную</a>
              </div>
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;