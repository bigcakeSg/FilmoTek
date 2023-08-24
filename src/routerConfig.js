import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import App from './App';
import MovieList from './components/pages/MovieList';
import Movie from './components/pages/Movie';
import { getMovieList } from './store/movieList/thunks';

const Root = () => {
  const dispatch = useDispatch();

  const loadMovieList = () => {
    dispatch(getMovieList());
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
          element: <Movie />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Root;
