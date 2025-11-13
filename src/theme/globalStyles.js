import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Capture';
    src: url('/fonts/Capture.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: ${props => props.theme.colors.dark[200]};
    color: ${props => props.theme.colors.light[100]};
    font-family: ${props => props.theme.typography.fontFamily.primary};
    line-height: ${props => props.theme.typography.lineHeight.normal};
    font-weight: ${props => props.theme.typography.fontWeight.normal};
    letter-spacing: ${props => props.theme.typography.letterSpacing.normal};
  }

  body {
    line-height: 1.6;
    background: ${props => props.theme.colors.dark[200]};
    color: ${props => props.theme.colors.light[100]};
    font-weight: ${props => props.theme.typography.fontWeight.normal};
    letter-spacing: ${props => props.theme.typography.letterSpacing.normal};
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-family: ${props => props.theme.typography.fontFamily.accent};
    letter-spacing: ${props => props.theme.typography.letterSpacing.normal};
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-family: ${props => props.theme.typography.fontFamily.headings};
    letter-spacing: ${props => props.theme.typography.letterSpacing.wide};
    text-transform: uppercase;
    font-weight: ${props => props.theme.typography.fontWeight.bold};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.typography.fontFamily.headings};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    letter-spacing: ${props => props.theme.typography.letterSpacing.wide};
    text-transform: uppercase;
    line-height: ${props => props.theme.typography.lineHeight.tight};
  }

  h1 {
    font-size: ${props => props.theme.typography.fontSize['5xl']};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }

  h2 {
    font-size: ${props => props.theme.typography.fontSize['4xl']};
  }

  h3 {
    font-size: ${props => props.theme.typography.fontSize['3xl']};
  }

  p, span, div, li {
    font-family: ${props => props.theme.typography.fontFamily.accent};
    letter-spacing: ${props => props.theme.typography.letterSpacing.normal};
    line-height: ${props => props.theme.typography.lineHeight.relaxed};
  }

  input, textarea, select {
    font-family: ${props => props.theme.typography.fontFamily.accent};
    letter-spacing: ${props => props.theme.typography.letterSpacing.normal};
  }

  /* Дополнительные классы для стилей */
  .font-metal {
    font-family: ${props => props.theme.typography.fontFamily.metal};
  }
  
  .font-tech {
    font-family: ${props => props.theme.typography.fontFamily.tech};
  }
  
  .font-heavy {
    font-family: ${props => props.theme.typography.fontFamily.headings};
  }

  .text-gradient {
    background: linear-gradient(45deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;

    @media (max-width: 768px) {
      padding: 0 0.5rem;
    }
  }

  /* Стили для скроллбара */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.dark[100]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.gray[300]};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.gray[400]};
  }
`;