import styled from 'styled-components';
import MovieMiniature from './MovieMiniature';
import { useMovieList } from './hook';
import { Pagination } from '@mui/material';

const StyledMovieList = styled.div`
  & .movie-list {
    &__count {
      margin-top: -10px;
      margin-bottom: 10px;
      text-transform: uppercase;
      text-align: right;
      font-size: 14px;
      & .value {
        font-weight: 700;
        font-size: 20px;
      }
    }
    &__tiles {
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
      margin-top: 20px;
    }
  }
`;

const MovieList = () => {
  const { moviesCount, movieListPage, handleChange, pageQantity } =
    useMovieList();

  return (
    <StyledMovieList>
      <div className="main-content">
        <div className="inner-content">
          <h2>Movie list</h2>
          <div className="movie-list__count">
            <span className="value">{moviesCount}</span>{' '}
            <span className="label">movies</span>
          </div>
          <div className="movie-list__tiles">
            {movieListPage.map((movie) => (
              <MovieMiniature movieId={movie} key={`movie-${movie}`} />
            ))}
          </div>
          <div className="movie-list__pagination">
            <Pagination
              count={pageQantity}
              shape="rounded"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </StyledMovieList>
  );
};

export default MovieList;
