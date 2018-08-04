const theme = {
  colors: {
    background: '#141514', // BLACK
    base: '#232323', // Black
    secondary: '#e9e9e9', // Medium Gray
    tertiary: '#f3f3f3', // Light Gray
    highlight: '#42CFA0', // NEON
    highlightText: '#fff', // WHITE
    readingText: '#a0a0a0', // Lighter black
    white: '#fff'
  },
  transition: {
    curve: 'cubic-bezier(.22,.65,.94,.52)'
  },
  fonts: {
    strong:
      "Montserrat,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
    regular:
      "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif"
  },
  sizes: {
    maxWidth: '1200px',
    maxWidthCentered: '760px',
    maxWidthArticle: '660px'
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em'
  }
};

export default theme;
