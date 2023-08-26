import styled from 'styled-components';

import MovieBanner from './MovieBanner';
import MoviePicture from './MoviePicture';
import MovieMainInfo from './MovieMainInfo';
import MovieInfo from './MovieInfo';
import MovieCasting from './MovieCasting';
import { useMovie } from './hook';
import { bannerHeight } from '../../../utils/theme';
import MovieActions from './MovieActions';
import { CircularProgress } from '@mui/material';
import { colorA } from '../../../utils/colors';

const StyledMovie = styled.div`
  & .inner-content {
    top: ${bannerHeight - 250}px;
  }
  & .movie {
    &__main-info {
      position: absolute;
      left: 290px;
      width: calc(100% - 310px);
      height: 220px;
      vertical-align: text-bottom;
    }
    &__info {
      position: absolute;
      top: 260px;
      left: 290px;
      width: calc(100% - 320px);
      height: 125px;
      vertical-align: text-bottom;
    }
    &__casting {
      margin-top: 400px;
      width: 100%;
    }
  }
  & .loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100px;
    & .loading {
      text-transform: uppercase;
      color: ${colorA};
      font-weight: 700;
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
`;

const Movie = () => {
  const {
    movieInfos,
    moviePrincipalCast,
    movieExtendedCast,
    movieCreators,
    movieRegionTitle,
    movieInfosLoading
  } = useMovie();

  return (
    <StyledMovie>
      <MovieBanner movieInfos={movieInfos} loading={movieInfosLoading} />
      <MovieActions
        onEdit={() => null}
        onImport={() => null}
        onDelete={() => null}
      />
      <div className="main-content">
        <div className="inner-content">
          <MoviePicture movieInfos={movieInfos} loading={movieInfosLoading} />
          <div className="movie__main-info">
            <MovieMainInfo
              movieInfos={movieInfos}
              movieRegionTitle={movieRegionTitle}
              loading={movieInfosLoading}
            />
          </div>
          <div className="movie__info">
            <MovieInfo
              movieInfos={movieInfos}
              movieCreators={movieCreators}
              loading={movieInfosLoading}
            />
          </div>

          <div className="movie__casting">
            <h2>Casting</h2>
            {movieInfosLoading ? (
              <div className="loader">
                <div className="loading">Loading</div>
                <CircularProgress color="secondary" />
              </div>
            ) : (
              <div className="movie__casting-list">
                <MovieCasting
                  casting={moviePrincipalCast}
                  loading={movieInfosLoading}
                  principal
                />
                <MovieCasting
                  casting={movieExtendedCast}
                  loading={movieInfosLoading}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </StyledMovie>
  );
};

export default Movie;
