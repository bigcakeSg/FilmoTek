import { PropTypes } from 'prop-types';
import { Divider, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useMovieItem } from './hook';
import styled from 'styled-components';
import { colorA } from '../../../../utils/colors';
import { Link } from 'react-router-dom';

const StyledMovieItem = styled.div`
  & a {
    text-decoration: none;
    color: ${colorA};
  }
  & .MuiListItemText-primary {
    font-weight: 700;
    font-size: 20px;
  }
  & .movie-list__picture {
    width: 50px;
    height: 74px;
    border: solid 2px ${colorA};
    margin-right: 20px;
    box-shadow: rgba(0, 0, 0, 0.5) 2px 2px 7px 1px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${colorA};
  }
`;

const MovieItem = ({ movieId }) => {
  // TODO: loader
  const { movieMiniInfosLoading, movieMiniInfos, movieTitleFrench } =
    useMovieItem(movieId);

  return (
    <StyledMovieItem>
      <Link to={`/movie/${movieId}`}>
        <ListItem disablePadding>
          <ListItemButton>
            <div
              className="movie-list__picture"
              style={{
                backgroundImage: `url(${movieMiniInfos.primaryImage.url})`
              }}
            ></div>
            <ListItemText
              primary={movieMiniInfos?.originalTitleText?.text}
              secondary={movieTitleFrench}
            />
            <ListItemText
              secondary={movieMiniInfos?.releaseYear?.year}
              sx={{ textAlign: 'right' }}
            />
          </ListItemButton>
        </ListItem>
      </Link>
      <Divider />
    </StyledMovieItem>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  movieId: PropTypes.string.isRequired
};
