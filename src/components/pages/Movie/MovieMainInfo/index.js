import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { duration } from '../../../../utils/helpers';

const StyledMovieMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  text-shadow: 1px 1px 2px #000;
  height: 100%;
  & .movie {
    &__title {
      font-weight: 700;
      font-size: 30px;
      margin-bottom: 5px;
    }
    &__region-title {
      font-weight: 300;
      font-size: 18px;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: solid 1px #fff;
    }
    &__year-duration {
      font-size: 20px;
      & .year {
        font-weight: 500;
      }
      & .duration {
        font-weight: 300;
      }
    }
  }
`;

const MovieMainInfo = ({ movieInfos, movieRegionTitle }) => {
  return (
    <StyledMovieMainInfo>
      <div className="movie__title">{movieInfos.originalTitleText}</div>
      <div className="movie__region-title">{movieRegionTitle}</div>
      <div className="movie__year-duration">
        <span className="year">{movieInfos.releaseYear.year}</span> &#8226;{' '}
        <span className="duration">
          {duration(movieInfos.runtime.seconds)} env.
        </span>
      </div>
    </StyledMovieMainInfo>
  );
};

export default MovieMainInfo;

MovieMainInfo.propTypes = {
  movieInfos: PropTypes.object.isRequired,
  movieRegionTitle: PropTypes.string.isRequired
};
