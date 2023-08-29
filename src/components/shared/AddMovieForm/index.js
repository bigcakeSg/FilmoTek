import { PropTypes } from 'prop-types';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@mui/material';
import { useAddMovieForm } from './hook';

const AddMovieForm = ({ addMovieOpen, setAddMovieOpen }) => {
  const { newMovie, setNewMovie, handleAddMovie } =
    useAddMovieForm(setAddMovieOpen);

  return (
    <Dialog open={addMovieOpen} onClose={() => setAddMovieOpen(false)}>
      <DialogTitle>Add a movie</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter a IMDB id for the movie.
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
        <Button onClick={handleAddMovie}>Add</Button>
      </DialogActions>
    </Dialog>
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
