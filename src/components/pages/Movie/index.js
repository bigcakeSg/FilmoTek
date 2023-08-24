import { useMovie } from './hook';
import { StyledMovie } from './styles';

const MovieBanner = ({ movieInfos }) => {
  return (
    <div className="movie-banner">
      <img
        className="movie-banner__image"
        src={movieInfos.primaryImage.url}
        width="100%"
        alt={movieInfos.primaryImage.caption.plainText}
      />
      <div className="movie-banner__overlay"></div>
    </div>
  );
};

const MovieMainInfo = ({ movieInfos, movieRegionTitle }) => {
  return (
    <div className="movie__main-info">
      <div className="movie__title">{movieInfos.originalTitleText}</div>
      <div className="movie__region-title">{movieRegionTitle}</div>
      <div className="movie__year">{movieInfos.releaseYear.year}</div>
    </div>
  );
};

const MovieInfo = ({ movieInfos, movieCreators }) => {
  return (
    <div className="movie__info">
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
        {movieCreators.writers.credits.map((credit) => credit.name).join(', ')}
      </div>
      <div className="movie__info-item movie__genres">
        {movieInfos.genres.map((genre) => (
          <div className="movie__genres-item" key={`genre-${genre.id}`}>
            {genre.text}
          </div>
        ))}
      </div>
    </div>
  );
};

const MoviePrincipalCasting = ({ casting }) => {
  return (
    <div className="movie__casting-principal">
      {casting.map((cast) => (
        <div className="cast__item" key={`cast-${cast.name.id}`}>
          <div
            className="casting__image"
            style={{
              backgroundImage: `url(${cast.name.primaryImage.url})`
            }}
          ></div>
          <div className="casting__name">{cast.name.nameText.text}</div>
          <div className="casting__character">
            {cast.characters.map((char) => char.name).join(' / ')}
          </div>
        </div>
      ))}
    </div>
  );
};

const MovieExtendedCasting = ({ casting }) => {
  return (
    <div className="movie__casting-extended">
      {casting.map((cast) => (
        <div className="cast__item" key={`cast-${cast.name.id}`}>
          <div
            className="casting__image"
            style={{
              backgroundImage: `url(${cast.name.primaryImage?.url})`
            }}
          ></div>
          <div>
            <div className="casting__name">{cast.name.nameText.text}</div>
            <div className="casting__character">
              {cast.characters.map((char) => char.name).join(' / ')}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

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
          <div className="movie__picture">
            <img
              src={movieInfos.primaryImage.url}
              width="100%"
              alt={movieInfos.primaryImage.caption.plainText}
            />
          </div>
          <MovieMainInfo
            movieInfos={movieInfos}
            movieRegionTitle={movieRegionTitle}
          />
          <MovieInfo movieInfos={movieInfos} movieCreators={movieCreators} />
          <div className="movie__casting">
            <h2>Casting</h2>
            <div className="movie__casting-list">
              <MoviePrincipalCasting casting={moviePrincipalCast} />
              <MovieExtendedCasting casting={movieExtendedCast} />
            </div>
          </div>
        </div>
      </StyledMovie>
    );
  else return null;
};

export default Movie;
