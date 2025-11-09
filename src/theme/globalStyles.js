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
    font-family: 'Capture', Arial, sans-serif;
    line-height: 1.55;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  body {
    font-family: 'Capture', Arial, sans-serif;
    line-height: 1.6;
    background: ${props => props.theme.colors.dark[200]};
    color: ${props => props.theme.colors.light[100]};
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-family: 'Capture', Arial, sans-serif;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-family: 'Capture', Arial, sans-serif;
    letter-spacing: 0.5px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Capture', Arial, sans-serif;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    line-height: 1.55;
  }

  p, span, div, li {
    font-family: 'Capture', Arial, sans-serif;
    letter-spacing: 0.5px;
    line-height: 1.55;
  }

  input, textarea, select {
    font-family: 'Capture', Arial, sans-serif;
    letter-spacing: 0.5px;
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