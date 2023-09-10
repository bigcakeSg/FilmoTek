import { useState } from 'react';

export const useMovieActions = () => {
  const [deleteMovieOpen, setDeleteMovieOpen] = useState(false);

  const handleDelete = async () => {
    setDeleteMovieOpen(true);
  };

  return { handleDelete, deleteMovieOpen, setDeleteMovieOpen };
};
