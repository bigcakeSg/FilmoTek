import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import {
  Backdrop,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { useDeleteMovieForm } from './hook';

const StyledLoader = styled(Backdrop)`
  & .loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__text {
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 16px;
      margin-bottom: 10px;
      text-shadow: 1px 1px 2px #000;
    }
  }
`;

const DeleteMovieForm = ({ movieId, deleteMovieOpen, setDeleteMovieOpen }) => {
  const { handleDeleteMovie, isMovieDeletion } = useDeleteMovieForm(
    movieId,
    setDeleteMovieOpen
  );

  return (
    <>
      <Dialog open={deleteMovieOpen} onClose={() => setDeleteMovieOpen(false)}>
        <form onSubmit={handleDeleteMovie} size="small">
          <DialogTitle>Delete a movie</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <strong>You are about to delete a movie.</strong> Are you sure ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setDeleteMovieOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Delete</Button>
          </DialogActions>
        </form>
        <StyledLoader
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isMovieDeletion}
        >
          <div className="loader">
            <div className="loader__text">Deletion, please wait...</div>
            <CircularProgress color="inherit" />
          </div>
        </StyledLoader>
      </Dialog>
    </>
  );
};

export default DeleteMovieForm;

DeleteMovieForm.propTypes = {
  movieImdbId: PropTypes.string.isRequired,
  deleteMovieOpen: PropTypes.bool.isRequired,
  setDeleteMovieOpen: PropTypes.func
};

DeleteMovieForm.defaultProps = {
  deleteMovieOpen: false,
  setDeleteMovieOpen: () => null
};
