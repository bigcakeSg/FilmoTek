import styled from 'styled-components';
import Footer from '../../shared/Footer';
import HeaderMenu from '../../shared/HeaderMenu';
import { colorA } from '../../../utils/colors';
import Img from '../../../assets/big-mistake.gif';
import UndoIcon from '@mui/icons-material/Undo';
import { IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { filmoTekTheme } from '../../../utils/theme';

const StyledError = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: ${colorA};
  background-image: ${`url(${Img})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  font-weight: 700;
  color: #fff;
  text-shadow: 1px 1px 2px #000;
  & .not-found {
    font-size: 92px;
    text-transform: uppercase;
  }
  & .mistake {
    font-size: 48px;
  }
`;

const Error = () => {
  return (
    <ThemeProvider theme={filmoTekTheme}>
      <HeaderMenu noMenu />
      <StyledError>
        <div className="not-found">Page not found</div>
        <div className="mistake">Big mistake!</div>
        <div>
          <Tooltip title="Return to movie list">
            <Link to={`/`}>
              <IconButton color="secondary" aria-label="delete">
                <UndoIcon />
              </IconButton>
            </Link>
          </Tooltip>
        </div>
      </StyledError>
      <Footer />
    </ThemeProvider>
  );
};

export default Error;
