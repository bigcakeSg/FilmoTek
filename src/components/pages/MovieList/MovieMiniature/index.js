import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useMovieMiniature } from './hook';
import { colorA, colorALight } from '../../../../utils/colors';
import {
  CircularProgress,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const miniWidth = 200;
const miniHeight = 294;

const StyledMovieMiniature = styled.div`
  position: relative;
  margin: 10px;
  border: solid 1px ${colorA};
  box-shadow: rgba(0, 0, 0, 0.5) 2px 2px 7px 1px;
  transition-duration: 0.5s;
  & .movie {
    &__picture {
      transition-duration: 0.5s;
      width: ${miniWidth}px;
      height: ${miniHeight}px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
      background-color: ${colorA};
    }
    &__overlay {
      backdrop-filter: blur(0px) brightness(100%);
      position: absolute;
      width: ${miniWidth}px;
      height: ${miniHeight}px;
      top: 0;
    }
    &__infos {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: ${miniWidth}px;
      height: ${miniHeight}px;
      color: #fff;
      padding: 10px;
      flex-direction: column;
      justify-content: space-between;
      & .original-title {
        font-weight: 700;
        margin-top: 25px;
        margin-bottom: 5px;
      }
      & .regional-title {
        font-weight: 300;
      }
      & .year {
        text-align: right;
      }
    }
  }
  :hover {
    box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0);
    color: ${colorA};
    border-color: ${colorA};
    & .movie {
      &__picture {
        background-size: 150%;
      }
      &__overlay {
        backdrop-filter: blur(10px) brightness(50%);
      }
      &__infos {
        display: flex;
      }
    }
  }
`;

const StyledMiniatureLoading = styled.div`
  position: relative;
  margin: 10px;
  border: solid 1px ${colorA};
  box-shadow: rgba(0, 0, 0, 0.5) 2px 2px 7px 1px;
  width: ${miniWidth}px;
  height: ${miniHeight}px;
  text-transform: uppercase;
  background-color: ${colorA};
  color: ${colorALight};
  font-weight: 700;
  font-size: 18px;
  display: flex;
  align-items: center;
  & .loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    & .loading {
      margin-bottom: 20px;
    }
  }
`;

const MovieTile = ({
  movieId,
  movieMiniInfosLoading,
  movieMiniInfos,
  movieTitleFrench
}) => {
  if (movieMiniInfosLoading)
    return (
      <StyledMiniatureLoading>
        <div className="loader">
          <div className="loading">Loading</div>
          <CircularProgress color="secondary" />
        </div>
      </StyledMiniatureLoading>
    );
  else
    return (
      <StyledLink to={`/movie/${movieId}`}>
        <StyledMovieMiniature>
          <div
            className="movie__picture"
            style={{
              backgroundImage: `url(${movieMiniInfos.picture.url})`
            }}
          ></div>
          <div className="movie__overlay"></div>
          <div className="movie__infos">
            <div>
              <div className="original-title">
                {movieMiniInfos.originalTitle}
              </div>
              <div className="regional-title">{movieTitleFrench}</div>
            </div>
            <div className="year">{movieMiniInfos.releaseYear}</div>
          </div>
        </StyledMovieMiniature>
      </StyledLink>
    );
};

MovieTile.propTypes = {
  movieId: PropTypes.string.isRequired,
  movieMiniInfosLoading: PropTypes.bool,
  movieMiniInfos: PropTypes.object,
  movieTitleFrench: PropTypes.string
};

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

const MovieListItem = ({
  movieId,
  movieMiniInfosLoading,
  movieMiniInfos,
  movieTitleFrench
}) => {
  // TODO: loader
  return (
    <StyledMovieItem>
      <Link to={`/movie/${movieId}`}>
        <ListItem disablePadding>
          <ListItemButton>
            <div
              className="movie-list__picture"
              style={{
                backgroundImage: `url(${movieMiniInfos.picture.url})`
              }}
            ></div>
            <ListItemText
              primary={movieMiniInfos.originalTitle}
              secondary={movieTitleFrench}
            />
            <ListItemText
              secondary={movieMiniInfos.releaseYear}
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
  movieId: PropTypes.string.isRequired,
  movieMiniInfosLoading: PropTypes.bool,
  movieMiniInfos: PropTypes.object,
  movieTitleFrench: PropTypes.string
};

const MovieMiniature = ({ movieId, miniatureType }) => {
  const { movieMiniInfosLoading, movieMiniInfos, movieTitleFrench } =
    useMovieMiniature(movieId);

  switch (miniatureType) {
    case 'TILE':
      return (
        <MovieTile
          movieId={movieId}
          movieMiniInfosLoading={movieMiniInfosLoading}
          movieMiniInfos={movieMiniInfos}
          movieTitleFrench={movieTitleFrench}
        />
      );
    case 'LIST':
      return (
        <MovieListItem
          movieId={movieId}
          movieMiniInfosLoading={movieMiniInfosLoading}
          movieMiniInfos={movieMiniInfos}
          movieTitleFrench={movieTitleFrench}
        />
      );
    default:
      return null;
  }
};

export default MovieMiniature;

MovieMiniature.propTypes = {
  movieId: PropTypes.string.isRequired,
  miniatureType: PropTypes.string
};
