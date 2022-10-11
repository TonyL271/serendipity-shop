import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#76E6D5',
      dark: '#322D41',
      light: '#F5F5F5',
      background: '#ecf8fc',
    },
    secondary: {
      main: '#FF995D',
    },
    error: {
      main: red.A400,
    },

  },
  typography: {
    fontFamily: 'Futura',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face{
        font-weight:200;
        font-family:'Futura';
      }
      `,
    }
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

export default theme;
