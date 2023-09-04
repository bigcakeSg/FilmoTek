import styled from 'styled-components';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import { Apps, Search, List } from '@mui/icons-material';
import { useMovieListActionsButtons } from './hook';

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

const MovieListActionsButtons = () => {
  const {
    handleDisplayChange,
    handleSortChange,
    handleSearchTitleChange,
    sortType,
    displayType
  } = useMovieListActionsButtons();

  return (
    <StyledMovieListActionsButtons>
      <FormControl size="small">
        <div className="movie-list__actions">
          <div className="movie-list__actions__filter">
            <TextField
              id="input-with-icon-textfield"
              label="Search title"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                )
              }}
              variant="outlined"
              size="small"
              onChange={handleSearchTitleChange}
            />
          </div>
          {/* <div className="movie-list__actions__filter">
            <InputLabel id="movie-list-filter-by-list-label">
              List(s)
            </InputLabel>
            <Select
              labelId="movie-list-filter-by-list-label"
              id="movie-list-filter-by-list"
              value={null}
              onChange={() => null}
              label="List(s)"
              sx={{ minWidth: 250 }}
            >
              <MenuItem value="test">test</MenuItem>
            </Select>
          </div>
          <div className="movie-list__actions__filter">
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
              sx={{ minWidth: 150 }}
            >
              <MenuItem value="ALPHA">Title</MenuItem>
              <MenuItem value="ALPHA_FRENCH">French title</MenuItem>
              <MenuItem value="CHRONO">Release date</MenuItem>
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
