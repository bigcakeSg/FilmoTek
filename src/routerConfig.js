import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import App from './App';
import MovieList from './components/pages/MovieList';
import Movie from './components/pages/Movie';
import { getMovieList } from './store/movieList/thunks';
import { getMovieInfos } from './store/movieInfos/thunks';

const Root = () => {
  const dispatch = useDispatch();

  const scrollTop = () => {
    const mainElement = document.getElementById('main-content');
    if (mainElement) mainElement.scrollTo(0, 0);
  };

  const loadMovieList = () => {
    scrollTop();
    dispatch(getMovieList());
    return false;
  };

  const loadMovieInfos = (movieId) => {
    scrollTop();
    dispatch(getMovieInfos(movieId));
    return true;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: (
        <>
          <h1>OUPS !</h1>
          <div>Big Mistake...</div>
        </>
      ),
      children: [
        {
          path: '',
          element: <MovieList />,
          loader: loadMovieList
        },
        {
          path: 'movie/:movieId',
          element: <Movie />,
          loader: ({ params }) => loadMovieInfos(params.movieId)
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Root;
