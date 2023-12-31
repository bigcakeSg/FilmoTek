import styled from 'styled-components';
import { useMovieList } from './hook';
import { CircularProgress, Pagination } from '@mui/material';
import { colorA } from '../../../utils/colors';
import MovieListTiles from './MovieListTiles';
import MovieListGrid from './MovieListGrid';
import MovieListActionsButtons from './MovieListActionsButtons';

const StyledMovieList = styled.div`
  & .movie-list {
    &__count {
      margin: -10px 10px 10px 0;
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

const MovieList = () => {
  const {
    moviesCount,
    moviesFilteredCount,
    movieListPage,
    actualPage,
    handlePaginationChange,
    pageQantity,
    displayType,
    movieListLoading
  } = useMovieList();

  return (
    <StyledMovieList>
      <div className="main-content">
        <div className="inner-content">
          <MovieListActionsButtons />
          <h2>Movie list</h2>
          {movieListLoading ? (
            <div className="loader">
              <div className="loading">Loading</div>
              <CircularProgress color="secondary" />
            </div>
          ) : (
            <>
              <div className="movie-list__count">
                {moviesFilteredCount !== moviesCount
                  ? moviesFilteredCount
                  : null}
                <span className="value">
                  {moviesFilteredCount !== moviesCount ? ' / ' : null}
                  {moviesCount}
                </span>{' '}
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
                  page={actualPage}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </StyledMovieList>
  );
};

export default MovieList;
