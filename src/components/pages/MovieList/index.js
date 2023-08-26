import styled from 'styled-components';
import MovieMiniature from './MovieMiniature';
import { useMovieList } from './hook';

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
`;

const MovieList = () => {
  const { movieList } = useMovieList();

  return (
    <div className="main-content">
      <div className="inner-content">
        <h2>Movie list</h2>
        <StyledSection>
          {movieList.map((movie) => (
            <MovieMiniature movieId={movie} key={`movie-${movie}`} />
          ))}
        </StyledSection>
      </div>
    </div>
  );
};

export default MovieList;
