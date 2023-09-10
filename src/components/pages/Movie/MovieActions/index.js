import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import Download from '@mui/icons-material/Download';
import { IconButton, Tooltip } from '@mui/material';
import { useMovieActions } from './hook';
import DeleteMovieForm from '../../../shared/DeleteMovieForm';

const StyledMovieActions = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 100;
  display: flex;
  & button {
    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 7px 0px;
    margin: 0 10px;
  }
`;

const MovieActions = ({ movieImdbId }) => {
  const { handleDelete, deleteMovieOpen, setDeleteMovieOpen } =
    useMovieActions();

  return (
    <>
      <StyledMovieActions>
        {/* <Tooltip title="Edit">
          <IconButton aria-label="edit" color="secondary">
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="Import from IMDB">
          <IconButton aria-label="delete" color="secondary">
            <Download />
          </IconButton>
        </Tooltip> */}
        <Tooltip title="Delete">
          <IconButton
            aria-label="import"
            color="secondary"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </StyledMovieActions>
      <DeleteMovieForm
        movieImdbId={movieImdbId}
        deleteMovieOpen={deleteMovieOpen}
        setDeleteMovieOpen={setDeleteMovieOpen}
      />
    </>
  );
};

export default MovieActions;

MovieActions.propTypes = {
  movieImdbId: PropTypes.string.isRequired
};
