import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { colorA } from '../../../../utils/colors';
import { Skeleton } from '@mui/material';

const StyledMovieMainInfo = styled.div`
  font-size: 16px;
  & .movie__info-item {
    margin-bottom: 5px;
  }
  & .movie__info-creators {
    margin-bottom: 30px;
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
  & .skeleton {
    display: inline-flex;
  }
`;

const MovieInfo = ({ movieInfos, movieCreators, loading }) => {
  return (
    <StyledMovieMainInfo>
      <div className="movie__info-creators">
        <div className="movie__info-item movie__directors">
          <span className="movie__label">
            Director
            {movieCreators?.directors && movieCreators.directors.length > 1
              ? 's'
              : ''}
            :{' '}
          </span>
          {loading ? (
            <div className="skeleton">
              <Skeleton
                variant="text"
                animation="wave"
                sx={{ fontSize: '16px' }}
                width={200}
              />
            </div>
          ) : (
            <span>
              {movieCreators?.directors
                ?.map((credit) => credit.name.text)
                .join(', ')}
            </span>
          )}
        </div>
        <div className="movie__info-item movie__writers">
          <span className="movie__label">
            Writer
            {movieCreators?.writers && movieCreators.writers.length > 1
              ? 's'
              : ''}
            :{' '}
          </span>
          {loading ? (
            <div className="skeleton">
              <Skeleton
                variant="text"
                animation="wave"
                sx={{ fontSize: '16px' }}
                width={200}
              />
            </div>
          ) : (
            <span>
              {movieCreators?.writers
                ?.map((credit) => credit.name.text)
                .join(', ')}
            </span>
          )}
        </div>
      </div>
      {loading ? null : (
        <div className="movie__info-item movie__genres">
          {movieInfos?.genres?.map((genre) => (
            <div className="movie__genres-item" key={`genre-${genre.id}`}>
              {genre.text}
            </div>
          ))}
        </div>
      )}
    </StyledMovieMainInfo>
  );
};

export default MovieInfo;

MovieInfo.propTypes = {
  movieInfos: PropTypes.object.isRequired,
  movieCreators: PropTypes.object.isRequired,
  loading: PropTypes.bool
};

MovieInfo.defaultProps = {
  movieInfos: {},
  movieCreators: {}
};
