import { useState } from 'react';

export const useHeaderMenu = () => {
  const [addMovieOpen, setAddMovieOpen] = useState(false);

  return { addMovieOpen, setAddMovieOpen };
};
