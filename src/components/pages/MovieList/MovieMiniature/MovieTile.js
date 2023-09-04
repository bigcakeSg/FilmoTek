import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
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
  const { movieTitleRegional, isLoading } = useMovieMiniature(movie);

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
              <div className="regional-title">{movieTitleRegional}</div>
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

export default MovieTile;
