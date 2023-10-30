import { IconButton, Tooltip } from '@mui/material';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import AlbumIcon from '@mui/icons-material/Album';
import { useMovieTools } from './hook';

const StyledMovieTools = styled.div`
  position: absolute;
  bottom: 6px;
  left: -10px;
  right: 0;
  padding: 3px;
  background: linear-gradient(
    90deg,
    rgba(38, 50, 56, 1) 0%,
    rgba(38, 50, 56, 1) 50%,
    rgba(38, 50, 56, 0) 100%
  );
  box-shadow: rgba(0, 0, 0, 0.5) 2px 2px 7px 1px;
`;

const MovieTools = ({ movie }) => {
  const { handleSeen } = useMovieTools(movie);

  return (
    <StyledMovieTools>
      {movie.seen ? (
        <Tooltip title="Already seen">
          <IconButton
            aria-label="import"
            color="secondary"
            onClick={handleSeen}
            size="small"
          >
            <VisibilityIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Not yet seen">
          <IconButton
            aria-label="import"
            color="secondary"
            onClick={handleSeen}
            size="small"
          >
            <VisibilityOffIcon fontSize="inherit" />
          </IconButton>
        </Tooltip>
      )}
      {/* <Tooltip title="Edit video support">
        <IconButton
          aria-label="import"
          color="secondary"
          onClick={handleEditSupport}
          size="small"
        >
          <AlbumIcon fontSize="inherit" />
        </IconButton>
      </Tooltip> */}
    </StyledMovieTools>
  );
};

export default MovieTools;

MovieTools.propTypes = {
  movie: PropTypes.object.isRequired
};
