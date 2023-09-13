import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CircularProgress, IconButton, Tooltip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AlbumIcon from '@mui/icons-material/Album';
import { colorA, colorALight } from '../../../../utils/colors';
import NoImg from '../../../../assets/noMovie.jpg';
import { useMovieMiniature } from './hook';

const miniWidth = 200;
const miniHeight = 294;

const StyledMiniatureLoading = styled.div`
  position: relative;
  margin: 10px;
  border: solid 1px ${colorA};
  box-shadow: rgba(0, 0, 0, 0.5) 2px 2px 7px 1px;
  width: ${miniWidth}px;
  height: ${miniHeight}px;
  text-transform: uppercase;
  background-color: ${colorA};
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
      color: ${colorALight};
      margin-bottom: 20px;
    }
  }
`;

const StyledMovieMiniature = styled.div`
  position: relative;
  margin: 10px;
  border: solid 1px ${colorA};
  box-shadow: rgba(0, 0, 0, 0.5) 2px 2px 7px 1px;
  transition-duration: 0.5s;
  width: ${miniWidth}px;
  height: ${miniHeight}px;
  & .movie {
    &__picture {
      position: absolute;
      transition-duration: 0.5s;
      width: ${miniWidth}px;
      height: ${miniHeight}px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 101% 101%;
    }
    &__overlay {
      backdrop-filter: blur(0px) brightness(100%);
      position: absolute;
      width: ${miniWidth}px;
      height: ${miniHeight}px;
    }
    &__action-buttons {
      position: absolute;
      bottom: 6px;
      left: -10px;
      right: 0;
      padding: 3px;
      background: linear-gradient(
        90deg,
        rgba(38, 50, 56, 1) 0%,
        rgba(38, 50, 56, 1) 50%,
        rgba(38, 50, 56, 0) 100%
      );
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
        margin-bottom: 5px;
      }
      & .regional-title {
        font-weight: 300;
      }
      & .year {
        position: absolute;
        text-align: right;
        bottom: 45px;
        right: 10px;
      }
    }
  }
  :hover {
    box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0);
    color: ${colorA};
    border-color: ${colorA};
    & .movie {
      &__picture {
        background-size: 150% 150%;
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const MovieTile = ({ movie }) => {
  const { movieTitleRegional, isLoading, handleSeen, handleEditSupport } =
    useMovieMiniature(movie);

  if (isLoading)
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
      <StyledLink to={`/movie/${movie.imdbId}`}>
        <StyledMovieMiniature>
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
          <div className="movie__overlay"></div>
          <div className="movie__infos">
            <div>
              <div className="original-title">{movie.originalTitle}</div>
              <div className="regional-title">
                {movie.originalTitle !== movieTitleRegional
                  ? movieTitleRegional
                  : null}
              </div>
            </div>
            <div className="movie__action-buttons">
              {movie.seen ? (
                <Tooltip title="Already seen">
                  <IconButton
                    aria-label="import"
                    color="secondary"
                    onClick={handleSeen}
                    size="small"
                  >
                    <VisibilityIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Not yet seen">
                  <IconButton
                    aria-label="import"
                    color="secondary"
                    onClick={handleSeen}
                    size="small"
                  >
                    <VisibilityOffIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
              )}
              <Tooltip title="Edit video support">
                <IconButton
                  aria-label="import"
                  color="secondary"
                  onClick={handleEditSupport}
                  size="small"
                >
                  <AlbumIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
            </div>
            <div className="year">{movie.releaseDate.year}</div>
          </div>
        </StyledMovieMiniature>
      </StyledLink>
    );
};

MovieTile.propTypes = {
  movie: PropTypes.object.isRequired
};

MovieTile.defaultProps = {
  handleEditSupport: () => null
};

export default MovieTile;
