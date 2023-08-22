import { Outlet } from 'react-router';
import HeaderMenu from './components/shared/HeaderMenu';
import { ThemeProvider } from '@mui/material/styles';
import { filmoTekTheme } from './utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={filmoTekTheme}>
      <HeaderMenu />
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default App;
