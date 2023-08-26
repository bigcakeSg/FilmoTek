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
