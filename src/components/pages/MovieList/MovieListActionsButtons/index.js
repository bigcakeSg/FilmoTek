import styled from 'styled-components';
import {
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import { Apps, Search, List, DisabledByDefault } from '@mui/icons-material';
import { useMovieListActionsButtons } from './hook';

const StyledMovieListActionsButtons = styled.div`
  position: absolute;
  right: 20px;
  & .movie-list__actions {
    display: flex;
    /* &__filter {
      position: relative;
      margin-right: 10px;
    } */
    &__sort {
      position: relative;
      margin-right: 10px;
    }
  }
  & .filter-component {
    display: inline-block;
    margin-left: 10px;
  }
`;

const seenValues = [
  { label: 'Seen', value: true },
  { label: 'Not seen', value: false }
];

const MovieListActionsButtons = () => {
  const {
    handleDisplayChange,
    handleSortChange,
    handleSearchTitleChange,
    sortType,
    displayType,
    searchTitle,
    handleClearTitleFilter,
    country,
    seenFilterValues,
    handleSeenCheck
  } = useMovieListActionsButtons();

  return (
    <StyledMovieListActionsButtons>
      <div className="filter-component">
        <FormControl sx={{ width: 200 }} size="small">
          <InputLabel id="seen-multiple-checkbox-label">Seen</InputLabel>
          <Select
            labelId="seen-multiple-checkbox-label"
            id="seen-multiple-checkbox"
            multiple
            value={seenFilterValues}
            onChange={handleSeenCheck}
            input={<OutlinedInput label="Seen" />}
            renderValue={(selected) =>
              selected
                .map(
                  (sel) => seenValues.find(({ value }) => value === sel).label
                )
                .join(', ')
            }
          >
            {seenValues.map((seen) => (
              <MenuItem key={`seen-${seen.value}`} value={seen.value}>
                <Checkbox checked={seenFilterValues.includes(seen.value)} />
                <ListItemText primary={seen.label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="filter-component">
        <FormControl size="small">
          <div className="movie-list__actions">
            <div className="movie-list__actions__filter">
              <InputLabel htmlFor="search-title-textfield">
                Search title
              </InputLabel>
              <OutlinedInput
                id="search-title-textfield"
                type="text"
                onChange={handleSearchTitleChange}
                value={searchTitle}
                startAdornment={
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Clear search title filter"
                      onClick={handleClearTitleFilter}
                      edge="end"
                    >
                      <DisabledByDefault />
                    </IconButton>
                  </InputAdornment>
                }
                label="Search title"
              />
            </div>
          </div>
        </FormControl>
      </div>

      {/* <div className="movie-list__actions__filter">
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
          </div> */}
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
      <div className="filter-component">
        <FormControl size="small">
          <div className="movie-list__actions">
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
                <MenuItem value="ALPHA_FRENCH">{country} title</MenuItem>
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
      </div>
    </StyledMovieListActionsButtons>
  );
};

export default MovieListActionsButtons;
