import { Outlet } from 'react-router';
import HeaderMenu from './components/shared/HeaderMenu';
import Footer from './components/shared/Footer';
import { ThemeProvider } from '@mui/material/styles';
import { filmoTekTheme } from './utils/theme';
import { useEffect } from 'react';
import { getMovieList } from './store/movieList/thunks';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  return (
    <ThemeProvider theme={filmoTekTheme}>
      <HeaderMenu />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
