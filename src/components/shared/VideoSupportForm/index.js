import { PropTypes } from 'prop-types';
import styled from 'styled-components';

import {
  Backdrop,
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup
} from '@mui/material';
import { useVideoSupportForm } from './hook';

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

const VideoSupportForm = ({ movieId, editSupportOpen, setEditSupportOpen }) => {
  const {
    handleEditSupport,
    isSupportEdition,
    supportsSelection,
    handleChangeSupportSelection,
    handleCancelEditSupport
  } = useVideoSupportForm(movieId, setEditSupportOpen);

  return (
    <>
      <Dialog open={editSupportOpen} onClose={() => setEditSupportOpen(false)}>
        <form onSubmit={handleEditSupport} size="small">
          <DialogTitle>Video support</DialogTitle>
          <DialogContent>
            <FormControl
              sx={{ width: 300 }}
              component="fieldset"
              variant="standard"
            >
              <DialogContentText>Chose video support:</DialogContentText>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={supportsSelection.includes('vhs')}
                      onChange={handleChangeSupportSelection}
                      name="vhs"
                    />
                  }
                  label="VHS"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={supportsSelection.includes('ld')}
                      onChange={handleChangeSupportSelection}
                      name="ld"
                    />
                  }
                  label="Laserdisc"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={supportsSelection.includes('dvd')}
                      onChange={handleChangeSupportSelection}
                      name="dvd"
                    />
                  }
                  label="DVD"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={supportsSelection.includes('bd')}
                      onChange={handleChangeSupportSelection}
                      name="bd"
                    />
                  }
                  label="Blu-Ray"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={supportsSelection.includes('uhd')}
                      onChange={handleChangeSupportSelection}
                      name="uhd"
                    />
                  }
                  label="Blu-Ray UHD"
                />
              </FormGroup>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelEditSupport}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </form>
        <StyledLoader
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isSupportEdition}
        >
          <div className="loader">
            <div className="loader__text">Update, please wait...</div>
            <CircularProgress color="inherit" />
          </div>
        </StyledLoader>
      </Dialog>
    </>
  );
};

export default VideoSupportForm;

VideoSupportForm.propTypes = {
  movieId: PropTypes.string.isRequired,
  editSupportOpen: PropTypes.bool.isRequired,
  setEditSupportOpen: PropTypes.func
};

VideoSupportForm.defaultProps = {
  editSupportOpen: false,
  setEditSupportOpen: () => null
};
