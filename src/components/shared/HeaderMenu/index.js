import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colorA } from '../../../utils/colors';
import { Button } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import QueueIcon from '@mui/icons-material/Queue';

const Header = styled.nav`
  background-color: ${colorA};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    & li {
      & a {
        text-decoration: none;
        color: #fff;
        padding: 5px;
        margin: 5px;
        &:hover {
          color: #ddd;
        }
      }
    }
  }
`;

const HeaderMenu = () => {
  return (
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
            <Button variant="text" disabled startIcon={<QueueIcon />}>
              Create a new movie
            </Button>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default HeaderMenu;
