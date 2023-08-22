import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import App from './App';
import MovieList from './components/pages/MovieList';
import Movie from './components/pages/Movie';
import { getStoreData } from './store/myStore/thunks';

const Root = () => {
  const dispatch = useDispatch();

  const loadStoreData = ({ params }) => {
    dispatch(getStoreData(params.userId));
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
          element: <MovieList />
        },
        {
          path: 'first-page/:userId',
          element: <Movie />,
          loader: loadStoreData
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Root;
