import { PropTypes } from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import Download from '@mui/icons-material/Download';
import { IconButton, Tooltip } from '@mui/material';
import styled from 'styled-components';

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

const MovieActions = ({ onDelete, onEdit, onImport }) => {
  return (
    <StyledMovieActions>
      <Tooltip title="Edit">
        <IconButton aria-label="edit" color="secondary">
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Import from IMDB">
        <IconButton aria-label="delete" color="secondary">
          <Download />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton aria-label="import" color="secondary">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </StyledMovieActions>
  );
};

export default MovieActions;

MovieActions.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onImport: PropTypes.func.isRequired
};

MovieActions.defaultProps = {
  onDelete: () => null,
  onEdit: () => null,
  onImport: () => null
};
