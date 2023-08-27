import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { colorB } from '../../../../utils/colors';
import { bannerHeight } from '../../../../utils/theme';
import { useMemo } from 'react';
import { useMovieBanner } from './hook';

const StyledMovieBanner = styled.div`
  position: relative;
  width: 100%;
  height: ${bannerHeight}px;
  background-color: ${colorB};
  & .movie-banner__image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 150%;
  }
  & .movie-banner__overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(100px) brightness(70%);
  }
`;

const MovieBanner = ({ movieInfos, loading }) => {
  const { backgroundImage } = useMovieBanner(movieInfos, loading);

  return (
    <StyledMovieBanner>
      <div
        className="movie-banner__image"
        style={{
          backgroundImage
        }}
      ></div>
      <div className="movie-banner__overlay"></div>
    </StyledMovieBanner>
  );
};

export default MovieBanner;

MovieBanner.propTypes = {
  movieInfos: PropTypes.object.isRequired,
  loading: PropTypes.bool
};

MovieBanner.defaultProps = {
  movieInfos: {}
};
