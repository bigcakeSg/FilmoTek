import styled from 'styled-components';
import { useMovieList } from './hook';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import { Apps } from '@mui/icons-material';
import { List } from '@mui/icons-material';
import { colorA } from '../../../utils/colors';
import MovieListTiles from './MovieListTiles';
import MovieListGrid from './MovieListGrid';

const StyledMovieList = styled.div`
  & .display-type__buttons {
    position: absolute;
    top: 10px;
    right: 10px;
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
    &__actions {
      display: flex;
      &__sort {
        margin-right: 10px;
      }
    }
  }
`;

const MovieList = () => {
  const {
    moviesCount,
    movieListPage,
    handlePaginationChange,
    pageQantity,
    displayType,
    handleDisplayChange,
    handleSortChange,
    sortType
  } = useMovieList();

  return (
    <StyledMovieList>
      <div className="main-content">
        <div className="inner-content">
          <div className="display-type__buttons">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <div className="movie-list__actions">
                <div className="movie-list__actions__sort">
                  <InputLabel id="movie-list-sort-by-label">Sort by</InputLabel>
                  <Select
                    labelId="movie-list-sort-by-label"
                    id="movie-list-sort-by"
                    value={sortType}
                    onChange={handleSortChange}
                    label="Sort by"
                  >
                    <MenuItem value="ALPHA">Title</MenuItem>
                    <MenuItem value="CHRONO">Year</MenuItem>
                  </Select>
                </div>
                <ToggleButtonGroup
                  value={displayType}
                  exclusive
                  onChange={handleDisplayChange}
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
            </FormControl>
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
              onChange={handlePaginationChange}
              color="secondary"
            />
          </div>
        </div>
      </div>
    </StyledMovieList>
  );
};

export default MovieList;
