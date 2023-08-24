import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import { useMovieMiniature } from './hook';
import { colorA } from '../../../utils/colors';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledMovieMiniature = styled.div`
  width: 200px;
  margin: 10px;
  padding: 10px;
  background-color: ${colorA};
  border-color: #fff;
  border: solid 1px;
  color: #fff;
  box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0.5);
  & .movie-info {
    font-size: 13px;
    &__year {
      font-weight: 300;
    }
    &__original {
      font-weight: 700;
    }
    &__region {
      border-top: solid 1px;
      margin-top: 5px;
      padding-top: 5px;
      font-weight: 400;
    }
  }
  :hover {
    box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0);
    background-color: #fff;
    color: ${colorA};
    border-color: ${colorA};
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
          <img
            src={movieMiniInfos.primaryImage.url}
            width="100%"
            alt={movieMiniInfos.primaryImage.caption.plainText}
          />
          <div className="movie-info">
            <div className="movie-info__original">
              <span className="movie-info__year">
                {movieMiniInfos.releaseYear.year}&nbsp;-&nbsp;
              </span>
              {movieMiniInfos.originalTitleText.text}
            </div>
            <div className="movie-info__region">{movieTitleFrench}</div>
          </div>
        </StyledMovieMiniature>
      </StyledLink>
    );
};

export default MovieMiniature;

MovieMiniature.propTypes = {
  movieId: PropTypes.string.isRequired
};
