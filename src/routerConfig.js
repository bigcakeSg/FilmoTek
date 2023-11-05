import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import App from './App';
import MovieList from './components/pages/MovieList';
import Movie from './components/pages/Movie';
import { getMovieInfos } from './store/movieInfos/thunks';
import Error from './components/pages/Error';
import { getAllSupports } from './store/videoSupports/thunks';

const Root = () => {
  const dispatch = useDispatch();

  const initApp = () => {
    dispatch(getAllSupports());
    return false;
  };

  const loadMovieList = () => {
    return false;
  };

  const loadMovieInfos = (movieId) => {
    dispatch(getMovieInfos(movieId));
    return true;
  };

  const router = createBrowserRouter([
    {
      path: process.env.PUBLIC_URL,
      element: <App />,
      errorElement: <Error />,
      loader: initApp,
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
      path: process.env.PUBLIC_URL + '/not-found',
      element: <Error />
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Root;
