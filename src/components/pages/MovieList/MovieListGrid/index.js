import { PropTypes } from 'prop-types';
import { Divider, List } from '@mui/material';
import MovieItem from '../MovieItem';
import styled from 'styled-components';

const StyledMovieListGrid = styled.div`
  width: 100%;
  margin-right: 10px;
`;

const MovieListGrid = ({ movieList }) => {
  return (
    <StyledMovieListGrid>
      <List>
        <Divider />
        {movieList.map((movie) => (
          <MovieItem movieId={movie} key={`movie-${movie}`} />
        ))}
      </List>
    </StyledMovieListGrid>
  );
};

export default MovieListGrid;

MovieListGrid.propTypes = {
  movieList: PropTypes.array
};

MovieListGrid.defaultProps = {
  movieList: []
};
