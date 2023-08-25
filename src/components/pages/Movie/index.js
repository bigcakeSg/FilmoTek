import styled from 'styled-components';

import MovieBanner from './MovieBanner';
import MoviePicture from './MoviePicture';
import MovieMainInfo from './MovieMainInfo';
import MovieInfo from './MovieInfo';
import MovieCasting from './MoviePrincipalCasting';
import { useMovie } from './hook';
// import { StyledMovie } from './styles';

const StyledMovie = styled.div`
  & .inner-content {
    top: 100px;
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
`;

const Movie = () => {
  const {
    movieInfos,
    moviePrincipalCast,
    movieExtendedCast,
    movieCreators,
    movieRegionTitle
  } = useMovie();

  if (movieInfos)
    return (
      <StyledMovie>
        <MovieBanner movieInfos={movieInfos} />
        <div className="main-content">
          <div className="inner-content">
            <MoviePicture movieInfos={movieInfos} />
            <div className="movie__main-info">
              <MovieMainInfo
                movieInfos={movieInfos}
                movieRegionTitle={movieRegionTitle}
              />
            </div>
            <div className="movie__info">
              <MovieInfo
                movieInfos={movieInfos}
                movieCreators={movieCreators}
              />
            </div>

            <div className="movie__casting">
              <h2>Casting</h2>
              <div className="movie__casting-list">
                <MovieCasting casting={moviePrincipalCast} principal />
                <MovieCasting casting={movieExtendedCast} />
              </div>
            </div>
          </div>
        </div>
      </StyledMovie>
    );
  else return null;
};

export default Movie;
