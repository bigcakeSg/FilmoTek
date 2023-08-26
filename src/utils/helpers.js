export const getMovieTitleByRegion = (movieTitles, region) =>
  movieTitles.find((movie) => movie.region === region)?.title;

export const duration = (seconds) => {
  const hours = Math.floor(+seconds / 3600);
  const minutes = Math.floor((+seconds % 3600) / 60);

  return `${hours}h${minutes < 10 ? 0 : ''}${minutes}`;
};
