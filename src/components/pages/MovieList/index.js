import styled from 'styled-components';
import { useMovieList } from './hook';
import { Pagination, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Apps } from '@mui/icons-material';
import { List } from '@mui/icons-material';
import { colorA } from '../../../utils/colors';
import MovieListTiles from './MovieListTiles';
import MovieListGrid from './MovieListGrid';

const StyledMovieList = styled.div`
  & .display-type__buttons {
    position: absolute;
    right: 20px;
  }
  & .movie-list {
    &__count {
      margin-top: -10px;
      margin-bottom: 10px;
      text-transform: uppercase;
      text-align: right;
      font-size: 14px;
      color: ${colorA};
      & .value {
        font-weight: 700;
        font-size: 20px;
      }
    }
    &__container {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px;
      flex: 1;
      overflow: auto;
      align-content: flex-start;
    }
    &__pagination {
      display: flex;
      justify-content: center;
      margin: 20px 0;
    }
  }
`;

const MovieList = () => {
  const {
    moviesCount,
    movieListPage,
    handleChange,
    pageQantity,
    displayType,
    handleDisplayType
  } = useMovieList();

  return (
    <StyledMovieList>
      <div className="main-content">
        <div className="inner-content">
          <div className="display-type__buttons">
            <ToggleButtonGroup
              value={displayType}
              exclusive
              onChange={handleDisplayType}
              aria-label="text alignment"
            >
              <ToggleButton value="TILES" size="small" aria-label="Tiles">
                <Apps />
              </ToggleButton>
              <ToggleButton value="LIST" size="small" aria-label="List">
                <List />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <h2>Movie list</h2>
          <div className="movie-list__count">
            <span className="value">{moviesCount}</span>{' '}
            <span className="label">movies</span>
          </div>
          <div id="movie-list__container" className="movie-list__container">
            {displayType === 'TILES' ? (
              <MovieListTiles movieList={movieListPage} />
            ) : null}
            {displayType === 'LIST' ? (
              <MovieListGrid movieList={movieListPage} />
            ) : null}
          </div>
          <div className="movie-list__pagination">
            <Pagination
              count={pageQantity}
              shape="rounded"
              onChange={handleChange}
              color="secondary"
            />
          </div>
        </div>
      </div>
    </StyledMovieList>
  );
};

export default MovieList;
