import { Link } from 'react-router-dom';
import { useMovie } from './hook';
import { Button } from '@mui/material';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import styled from 'styled-components';
import { colorA } from '../../../utils/colors';
import { StyledMovie } from './styles';

const Movie = () => {
  const {
    movieInfo,
    moviePrincipalCast,
    movieExtendedCast,
    movieDirectors,
    movieWriters,
    movieTitleFrench
  } = useMovie();

  return (
    <StyledMovie>
      <div className="movie-banner">
        <img
          className="movie-banner__image"
          src={movieInfo.primaryImage.url}
          width="100%"
          alt={movieInfo.primaryImage.caption.plainText}
        />
        <div className="movie-banner__overlay"></div>
      </div>
      <div className="main-content">
        <div className="movie__picture">
          <img
            src={movieInfo.primaryImage.url}
            width="100%"
            alt={movieInfo.primaryImage.caption.plainText}
          />
        </div>
        <div className="movie__main-info">
          <div className="movie__title">{movieInfo.originalTitleText.text}</div>
          <div className="movie__region-title">{movieTitleFrench}</div>
          <div className="movie__year">{movieInfo.releaseYear.year}</div>
        </div>
        <div className="movie__info">
          <div className="movie__info-item movie__directors">
            <span className="movie__label">
              Director{movieDirectors.length > 1 ? 's' : ''}:{' '}
            </span>
            {movieDirectors.join(', ')}
          </div>
          <div className="movie__info-item movie__writers">
            <span className="movie__label">
              Writer{movieWriters.length > 1 ? 's' : ''}:{' '}
            </span>
            {movieWriters.join(', ')}
          </div>
          <div className="movie__info-item movie__genres">
            {movieInfo.genres.genres.map((genre) => (
              <div className="movie__genres-item" key={`genre-${genre.id}`}>
                {genre.text}
              </div>
            ))}
          </div>
        </div>
        <div className="movie__casting">
          <h2>Casting</h2>
          <div className="movie__casting-list">
            <div className="movie__casting-principal">
              {moviePrincipalCast.principalCast[0].credits.map((credit) => (
                <div className="cast__item" key={`cast-${credit.name.id}`}>
                  <div
                    className="casting__image"
                    style={{
                      backgroundImage: `url(${credit.name.primaryImage.url})`
                    }}
                  ></div>
                  <div className="casting__name">
                    {credit.name.nameText.text}
                  </div>
                  <div className="casting__character">
                    {credit.characters.map((char) => char.name).join(' / ')}
                  </div>
                </div>
              ))}
            </div>
            <div className="movie__casting-extended">
              {movieExtendedCast.cast.edges.map((edge) => (
                <div className="cast__item" key={`cast-${edge.node.name.id}`}>
                  <div
                    className="casting__image"
                    style={{
                      backgroundImage: `url(${edge.node.name.primaryImage?.url})`
                    }}
                  ></div>
                  <div>
                    <div className="casting__name">
                      {edge.node.name.nameText.text}
                    </div>
                    <div className="casting__character">
                      {edge.node.characters
                        .map((char) => char.name)
                        .join(' / ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StyledMovie>
  );
};

export default Movie;
