import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import QueueIcon from '@mui/icons-material/Queue';
import { BarChart } from '@mui/icons-material';
import { colorA } from '../../../utils/colors';
import { headerHeight } from '../../../utils/theme';
import AddMovieForm from '../AddMovieForm';
import { useHeaderMenu } from './hook';

const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${colorA};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${headerHeight}px;
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    & li {
      margin: 5px;
      & a {
        text-decoration: none;
        color: #fff;
        &:hover {
          color: #ddd;
        }
      }
    }
  }
`;

const HeaderMenu = () => {
  const { addMovieOpen, setAddMovieOpen } = useHeaderMenu();

  return (
    <>
      <Header>
        <h1>
          Filmo<span>TEK</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>
                <Button
                  variant="text"
                  color="secondary"
                  startIcon={<ViewListIcon />}
                >
                  Movie List
                </Button>
              </Link>
            </li>
            <li>
              <Button variant="text" color="secondary" startIcon={<BarChart />}>
                Statistics
              </Button>
            </li>
            <li>
              <Button
                variant="text"
                color="secondary"
                startIcon={<QueueIcon />}
                onClick={() => {
                  setAddMovieOpen(true);
                }}
              >
                Add a movie
              </Button>
            </li>
          </ul>
        </nav>
      </Header>
      <AddMovieForm
        addMovieOpen={addMovieOpen}
        setAddMovieOpen={setAddMovieOpen}
      />
    </>
  );
};

export default HeaderMenu;
