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
  DialogTitle,
  FormControlLabel,
  Switch,
  TextField
} from '@mui/material';
import { useAddMovieForm } from './hook';

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

const AddMovieForm = ({ addMovieOpen, setAddMovieOpen }) => {
  const {
    newMovie,
    setNewMovie,
    handleAddMovie,
    isMovieCreation,
    creationRedirect,
    handleRedirect
  } = useAddMovieForm(setAddMovieOpen);

  return (
    <>
      <Dialog open={addMovieOpen} onClose={() => setAddMovieOpen(false)}>
        <form onSubmit={handleAddMovie} size="small">
          <DialogTitle>Add a movie</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter a valid IMDB id for the movie.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="imdbId"
              label="IMDB ID"
              type="text"
              fullWidth
              variant="standard"
              value={newMovie}
              onChange={(event) => setNewMovie(event.target.value)}
            />
            <FormControlLabel
              control={<Switch />}
              label="Redirect after creation"
              checked={creationRedirect}
              onChange={handleRedirect}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setNewMovie('');
                setAddMovieOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={!newMovie.trim()}>
              Add
            </Button>
          </DialogActions>
        </form>
        <StyledLoader
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isMovieCreation}
        >
          <div className="loader">
            <div className="loader__text">Creation, please wait...</div>
            <CircularProgress color="inherit" />
          </div>
        </StyledLoader>
      </Dialog>
    </>
  );
};

export default AddMovieForm;

AddMovieForm.propTypes = {
  addMovieOpen: PropTypes.bool.isRequired,
  setAddMovieOpen: PropTypes.func
};

AddMovieForm.defaultProps = {
  addMovieOpen: false,
  setAddMovieOpen: () => null
};
