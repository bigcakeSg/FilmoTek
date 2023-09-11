import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import App from './App';
import MovieList from './components/pages/MovieList';
import Movie from './components/pages/Movie';
import { getMovieList } from './store/movieList/thunks';
import { getMovieInfos } from './store/movieInfos/thunks';
import Error from './components/pages/Error';

const Root = () => {
  const dispatch = useDispatch();

  const loadMovieList = () => {
    // dispatch(getMovieList());
    return false;
  };

  const loadMovieInfos = (movieId) => {
    dispatch(getMovieInfos(movieId));
    return true;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
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
    },
    {
      path: '/not-found',
      element: <Error />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Root;
