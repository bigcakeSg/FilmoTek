import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import { Apps } from '@mui/icons-material';
import { List } from '@mui/icons-material';

const StyledMovieListActionsButtons = styled.div`
  position: absolute;
  right: 20px;
  & .movie-list__actions {
    display: flex;
    &__filter {
      position: relative;
      margin-right: 10px;
    }
    &__sort {
      position: relative;
      margin-right: 10px;
    }
  }
`;

const MovieListActionsButtons = ({
  sortType,
  handleSortChange,
  displayType,
  handleDisplayChange
}) => {
  return (
    <StyledMovieListActionsButtons>
      <FormControl size="small">
        <div className="movie-list__actions">
          {/* <div className="movie-list__actions__filter">
            <InputLabel id="movie-list-filter-by-director-label">
              Director(s)
            </InputLabel>
            <Select
              labelId="movie-list-filter-by-director-label"
              id="movie-list-filter-by-director"
              value={null}
              onChange={() => null}
              label="Director(s)"
              sx={{ minWidth: 250 }}
            >
              <MenuItem value="test">test</MenuItem>
            </Select>
          </div> */}
          <div className="movie-list__actions__sort">
            <InputLabel id="movie-list-sort-by-label">Sort by</InputLabel>
            <Select
              labelId="movie-list-sort-by-label"
              id="movie-list-sort-by"
              value={sortType}
              onChange={handleSortChange}
              label="Sort by"
            >
              <MenuItem value="ALPHA">Title</MenuItem>
              <MenuItem value="CHRONO">Year</MenuItem>
            </Select>
          </div>
          <ToggleButtonGroup
            value={displayType}
            exclusive
            onChange={handleDisplayChange}
            aria-label="text alignment"
          >
            <ToggleButton value="TILES" size="small" aria-label="Tiles">
              <Apps />
            </ToggleButton>
            <ToggleButton value="LIST" size="small" aria-label="List">
              <List />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </FormControl>
    </StyledMovieListActionsButtons>
  );
};

export default MovieListActionsButtons;

MovieListActionsButtons.propTypes = {
  sortType: PropTypes.string,
  handleSortChange: PropTypes.func,
  displayType: PropTypes.string,
  handleDisplayChange: PropTypes.func
};
