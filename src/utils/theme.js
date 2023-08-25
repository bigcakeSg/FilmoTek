import { createTheme } from '@mui/material';

export const headerHeight = 60;
export const footerHeight = 25;
export const bannerHeight = 250;

export const filmoTekTheme = createTheme({
  palette: {
    // primary: {
    //   light: '#eceff1',
    //   main: '#b0bec5',
    //   dark: '#263238',
    //   contrastText: '#fff'
    // },
    secondary: {
      light: '#eceff1',
      main: '#b0bec5',
      dark: '#263238',
      contrastText: '#fff'
    },
    action: {
      disabled: '#546e7a'
    }
    // success: {
    //   light: '#eceff1',
    //   main: '#b0bec5',
    //   dark: '#263238',
    //   contrastText: '#fff'
    // },
    // error: {
    //   light: '#eceff1',
    //   main: '#b0bec5',
    //   dark: '#263238',
    //   contrastText: '#fff'
    // }
  }
});
