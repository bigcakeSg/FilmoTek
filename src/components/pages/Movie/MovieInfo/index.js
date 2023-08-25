import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { colorA } from '../../../../utils/colors';

const StyledMovieMainInfo = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  & .movie__info-item {
    margin-bottom: 5px;
  }
  & .movie__label {
    font-weight: 700;
    color: ${colorA};
  }
  & .movie__genres {
    &-item {
      display: inline-block;
      border: solid 1px ${colorA};
      border-radius: 15px;
      margin-right: 10px;
      margin-top: 5px;
      padding: 2px 7px;
      font-size: 14px;
      font-weight: 700;
      color: ${colorA};
    }
  }
`;

const MovieInfo = ({ movieInfos, movieCreators }) => {
  return (
    <StyledMovieMainInfo>
      <div>
        <div className="movie__info-item movie__directors">
          <span className="movie__label">
            Director{movieCreators.directors.credits.length > 1 ? 's' : ''}:{' '}
          </span>
          {movieCreators.directors.credits
            .map((credit) => credit.name)
            .join(', ')}
        </div>
        <div className="movie__info-item movie__writers">
          <span className="movie__label">
            Writer{movieCreators.writers.credits.length > 1 ? 's' : ''}:{' '}
          </span>
          {movieCreators.writers.credits
            .map((credit) => credit.name)
            .join(', ')}
        </div>
      </div>
      <div className="movie__info-item movie__genres">
        {movieInfos.genres.map((genre) => (
          <div className="movie__genres-item" key={`genre-${genre.id}`}>
            {genre.text}
          </div>
        ))}
      </div>
    </StyledMovieMainInfo>
  );
};

export default MovieInfo;

MovieInfo.propTypes = {
  movieInfos: PropTypes.object.isRequired,
  movieCreators: PropTypes.object.isRequired
};
