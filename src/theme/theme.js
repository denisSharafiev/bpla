export const theme = {
  colors: {
    primary: '#FFD700',
    secondary: '#ff0000',
    dark: {
      100: '#1f2937',
      200: '#111827',
      300: '#0f172a',
    },
    light: {
      100: '#f8fafc',
      200: '#e2e8f0',
      300: '#cbd5e1',
    },
    white: '#ffffff',
    black: '#000000',
    gray: {
      100: '#374151',
      200: '#4b5563',
      300: '#6b7280',
      400: '#9ca3af',
      500: '#d1d5db',
    }
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.3)',
    md: '0 4px 6px rgba(0,0,0,0.4)',
    lg: '0 10px 25px rgba(0,0,0,0.5)',
  },
  typography: {
    fontFamily: {
      primary: "'Black Ops One', cursive",
      headings: "'Russo One', sans-serif",
      accent: "'Orbitron', sans-serif",
      metal: "'Metal Mania', cursive",
      tech: "'Audiowide', cursive",
      fallback: "Arial, sans-serif"
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
      black: 900,
    },
    letterSpacing: {
      tight: '-0.5px',
      normal: '1px',
      wide: '2px',
    },
    lineHeight: {
      tight: 1.1,
      normal: 1.3,
      relaxed: 1.5,
    }
  }
};