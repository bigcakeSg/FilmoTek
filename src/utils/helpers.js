import axios from 'axios';

export const getMovieTitleByRegion = (movieTitles, region) =>
  movieTitles.find((movie) => movie.region === region)?.title.toString() || '';

export const duration = (seconds) => {
  const hours = Math.floor(+seconds / 3600);
  const minutes = Math.floor((+seconds % 3600) / 60);

  return `${hours}h${minutes < 10 ? 0 : ''}${minutes}`;
};

export const scrollTop = (elementId) => {
  const mainElement = document.getElementById(elementId);
  if (mainElement) mainElement.scrollTo(0, 0);
};

export const loadImageAsBlob = (imageUrl, id) => {
  return async () => {
    try {
      let blob = sessionStorage.getItem(id); // get the blob URL for this image URL (or null)
      let result = null;

      if (!blob) {
        result = await axios.get(imageUrl, { responseType: 'blob' });
        blob = URL.createObjectURL(result.data);
        sessionStorage.setItem(id, blob); // save in session storage
      }

      return blob;
    } catch (error) {
      console.log('ERROR');
      return null;
    }
  };
};

export const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, delay);
  };
};
