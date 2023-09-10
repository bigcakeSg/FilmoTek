import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

export const useMovieActions = () => {
  // const navigate = useNavigate();
  const [deleteMovieOpen, setDeleteMovieOpen] = useState(false);

  const handleDelete = async () => {
    setDeleteMovieOpen(true);
    // await dispatch(deleteMovieByImdbId(movieImdbId));
    // navigate(`/`);
  };

  return { handleDelete, deleteMovieOpen, setDeleteMovieOpen };
};
