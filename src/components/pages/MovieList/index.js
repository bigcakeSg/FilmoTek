import styled from 'styled-components';
import { movieList } from '../../../mocks';
import MovieMiniature from '../../shared/MovieMiniature';

const StyledSection = styled.section`
  display: flex;
  margin: -10px;
`;

const MovieList = (userId, setUserId) => {
  return (
    <div className="main-content">
      <h2>Movie list</h2>
      <StyledSection>
        {movieList.map((movie) => (
          <MovieMiniature movieId={movie} />
        ))}
      </StyledSection>
    </div>
  );
};

export default MovieList;
