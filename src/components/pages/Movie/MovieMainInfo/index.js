import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { duration } from '../../../../utils/helpers';
import { Skeleton } from '@mui/material';

const StyledMovieMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  text-shadow: 1px 1px 2px #000;
  height: 100%;
  & .movie {
    &__title {
      margin-bottom: 20px;
      &--original {
        font-weight: 700;
        font-size: 30px;
        margin: 0 50px 5px -20px;
        padding: 3px 20px;
        background: linear-gradient(
          90deg,
          rgba(38, 50, 56, 1) 0%,
          rgba(38, 50, 56, 1) 50%,
          rgba(38, 50, 56, 0) 100%
        );
      }
      &--region {
        font-weight: 300;
        font-size: 18px;
        margin-left: 10px;
        font-style: italic;
      }
    }
    &__year-duration {
      font-size: 20px;
      margin-left: 10px;
      & .year {
        display: inline-block;
        font-weight: 500;
      }
      & .duration {
        display: inline-block;
        font-weight: 300;
        margin-left: 10px;
        border-left: solid 1px #fff;
        padding-left: 10px;
      }
    }
  }
`;

const MovieMainInfo = ({ movieInfos, movieRegionTitle, loading }) => {
  return (
    <StyledMovieMainInfo>
      <div className="movie__title">
        {loading ? (
          <>
            <Skeleton
              variant="text"
              animation="wave"
              sx={{ fontSize: '30px' }}
              width={300}
            />
            <Skeleton
              variant="text"
              animation="wave"
              sx={{ fontSize: '18px' }}
              width={400}
            />
          </>
        ) : (
          <>
            <div className="movie__title--original">
              {movieInfos.originalTitle}
            </div>
            <div className="movie__title--region">
              {movieInfos.originalTitle !== movieRegionTitle
                ? movieRegionTitle
                : null}
            </div>
          </>
        )}
      </div>
      <div className="movie__year-duration">
        {loading ? (
          <>
            <div className="year">
              <Skeleton
                variant="text"
                animation="wave"
                sx={{ fontSize: '10px' }}
                width={100}
              />
            </div>
            <div className="duration">
              <Skeleton
                variant="text"
                animation="wave"
                sx={{ fontSize: '10px' }}
                width={100}
              />
            </div>
          </>
        ) : (
          <>
            <div className="year">{movieInfos.releaseDate.year}</div>
            <div className="duration">
              {movieInfos.duration
                ? `${duration(movieInfos.duration)} env.`
                : null}
            </div>
          </>
        )}
      </div>
    </StyledMovieMainInfo>
  );
};

export default MovieMainInfo;

MovieMainInfo.propTypes = {
  movieInfos: PropTypes.object.isRequired,
  movieRegionTitle: PropTypes.string,
  loading: PropTypes.bool
};

MovieMainInfo.defaultProps = {
  movieInfos: {}
};
