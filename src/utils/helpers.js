export const getMovieTitleByRegion = (movieTitles, region) =>
  movieTitles.results.find((movie) => movie.region === region).title;
