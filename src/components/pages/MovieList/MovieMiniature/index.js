import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useMovieMiniature } from './hook';
import { colorA } from '../../../../utils/colors';

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
    &__image {
      transition-duration: 0.5s;
      width: ${miniWidth}px;
      height: ${miniHeight}px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
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
    background-color: #fff;
    color: ${colorA};
    border-color: ${colorA};
    & .movie {
      &__image {
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

const MovieMiniature = ({ movieId }) => {
  const { movieMiniInfosLoading, movieMiniInfos, movieTitleFrench } =
    useMovieMiniature(movieId);

  if (movieMiniInfosLoading) return <div>Loading</div>;
  else
    return (
      <StyledLink to={`/movie/${movieId}`}>
        <StyledMovieMiniature>
          <div
            className="movie__image"
            style={{
              backgroundImage: `url(${movieMiniInfos.primaryImage.url})`
            }}
          ></div>
          <div className="movie__overlay"></div>
          <div className="movie__infos">
            <div>
              <div className="original-title">
                {movieMiniInfos.originalTitleText.text}
              </div>
              <div className="regional-title">{movieTitleFrench}</div>
            </div>
            <div className="year">{movieMiniInfos.releaseYear.year}</div>
          </div>
        </StyledMovieMiniature>
      </StyledLink>
    );
};

export default MovieMiniature;

MovieMiniature.propTypes = {
  movieId: PropTypes.string.isRequired
};
