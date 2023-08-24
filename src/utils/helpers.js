export const getMovieTitleByRegion = (movieTitles, region) =>
  movieTitles.find((movie) => movie.region === region).title;
