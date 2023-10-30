import styled from 'styled-components';

import MovieBanner from './MovieBanner';
import MoviePicture from './MoviePicture';
import MovieMainInfo from './MovieMainInfo';
import MovieInfo from './MovieInfo';
import MovieCasting from './MovieCasting';
import MovieActions from './MovieActions';
import { useMovie } from './hook';
import { bannerHeight } from '../../../utils/theme';
import { CircularProgress } from '@mui/material';
import { colorA } from '../../../utils/colors';
import MovieVideoSupports from './MovieVideoSupports';

const StyledMovie = styled.div`
  & .inner-content {
    top: ${bannerHeight - 250}px;
  }
  & .movie {
    &__main-info {
      position: absolute;
      left: 350px;
      width: calc(100% - 370px);
      height: 220px;
      vertical-align: text-bottom;
    }
    &__info {
      position: relative;
      top: 10px;
      width: 100%;
      height: 100px;
      vertical-align: text-bottom;
    }
    &__casting {
      margin-top: 50px;
    }
    &__container {
      margin-top: 230px;
      padding-bottom: 20px;
      width: 100%;
      flex: 1;
      overflow: auto;
      display: flex;
    }
    &__container-info {
      margin-left: 330px;
      padding-right: 10px;
    }
    &__detail {
      width: 300px;
      margin-top: 230px;
      position: fixed;
      & p {
        font-size: 18px;
        line-height: 26px;
        font-weight: 100;
        margin-top: 0;
      }
    }
    &__plot {
      text-align: justify;
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
  const { movieInfos, movieRegionTitle, movieInfosLoading } = useMovie();

  if (!Object.keys(movieInfos).length) {
    return null;
  } else
    return (
      <StyledMovie>
        <MovieBanner movieInfos={movieInfos} loading={movieInfosLoading} />
        <div className="main-content">
          <div className="inner-content">
            {movieInfos.imdbId ? (
              <MovieActions movieId={movieInfos._id} />
            ) : null}
            <MoviePicture
              id={movieInfos?.imdbId}
              movieUrl={movieInfos?.picture?.url}
              originalTitle={movieInfos.originalTitle}
              loading={movieInfosLoading}
            />
            <div className="movie__main-info">
              <MovieMainInfo
                movieInfos={movieInfos}
                movieRegionTitle={movieRegionTitle}
                loading={movieInfosLoading}
              />
            </div>
            <div className="movie__container">
              <div className="movie__detail">
                <MovieVideoSupports movieId={movieInfos._id} />
                <div className="movie__plot">
                  <h3>Plot</h3>
                  <p>{movieInfos.plot}</p>
                </div>
              </div>
              <div className="movie__container-info">
                <div className="movie__info">
                  <MovieInfo
                    movieInfos={movieInfos}
                    movieCreators={{
                      directors: movieInfos.directors,
                      writers: movieInfos.writers
                    }}
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
                        casting={movieInfos.casting.principal}
                        loading={movieInfosLoading}
                        principal
                      />
                      <MovieCasting
                        casting={movieInfos.casting.extended}
                        loading={movieInfosLoading}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledMovie>
    );
};

export default Movie;
