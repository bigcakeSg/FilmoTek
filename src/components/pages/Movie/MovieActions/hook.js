import { useState } from 'react';

export const useMovieActions = () => {
  const [deleteMovieOpen, setDeleteMovieOpen] = useState(false);
  const [editSupportOpen, setEditSupportOpen] = useState(false);

  const handleDelete = async () => {
    setDeleteMovieOpen(true);
  };

  const handleEditSupport = async () => {
    setEditSupportOpen(true);
  };

  return {
    handleDelete,
    deleteMovieOpen,
    setDeleteMovieOpen,
    handleEditSupport,
    editSupportOpen,
    setEditSupportOpen
  };
};
