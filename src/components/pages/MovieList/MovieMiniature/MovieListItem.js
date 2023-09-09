import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Divider, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { colorA } from '../../../../utils/colors';
import NoImg from '../../../../assets/noMovie.jpg';
import { useMovieMiniature } from './hook';

const miniWidth = 50;
const miniHeight = 74;

const StyledMovieItem = styled.div`
  & a {
    text-decoration: none;
    color: ${colorA};
  }
  & .MuiListItemText-primary {
    font-weight: 700;
    font-size: 20px;
  }
  & .movie {
    &__picture-container {
      position: relative;
      width: ${miniWidth}px;
      height: ${miniHeight}px;
      box-shadow: rgba(0, 0, 0, 0.5) 2px 2px 7px 1px;
      margin-right: 20px;
    }
    &__picture {
      position: absolute;
      width: ${miniWidth}px;
      height: ${miniHeight}px;
      border: solid 2px ${colorA};
      margin-right: 20px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`;

const MovieListItem = ({ movie }) => {
  const { movieTitleRegional, isLoading } = useMovieMiniature(movie);

  if (isLoading)
    return (
      <StyledMovieItem>
        <ListItem disablePadding>
          <ListItemText primary="Loading..." />
        </ListItem>
        <Divider />
      </StyledMovieItem>
    );
  else
    return (
      <StyledMovieItem>
        <Link to={`/movie/${movie.imdbId}`}>
          <ListItem disablePadding>
            <ListItemButton>
              <div className="movie__picture-container">
                <div
                  className="movie__picture movie__no-picture"
                  style={{
                    backgroundImage: `url(${NoImg})`
                  }}
                ></div>
                <div
                  className="movie__picture movie__with-picture"
                  style={{
                    backgroundImage: `url(${movie.picture.url})`
                  }}
                ></div>
              </div>
              {/* <div
                className="movie-list__picture"
                style={{
                  backgroundImage: `url(${blobUrl || NoImg})`
                }}
              ></div> */}
              <ListItemText
                primary={movie.originalTitle}
                secondary={movieTitleRegional}
              />
              <ListItemText
                secondary={movie.releaseDate.year}
                sx={{ textAlign: 'right' }}
              />
            </ListItemButton>
          </ListItem>
        </Link>
        <Divider />
      </StyledMovieItem>
    );
};

MovieListItem.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieListItem;
