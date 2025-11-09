import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // ИСПОЛЬЗУЕМ HashRouter!
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router> {/* HashRouter без basename */}
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
              <Header />
              <AboutPage />
              <Footer />
            </>
          } />
          <Route path="/humanitarian" element={
            <>
              <Header />
              <HumanitarianPage />
              <Footer />
            </>
          } />
          <Route path="/join" element={
            <>
              <Header />
              <JoinPage />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;