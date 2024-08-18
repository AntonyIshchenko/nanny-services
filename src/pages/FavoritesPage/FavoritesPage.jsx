import { useEffect } from 'react';

import css from './FavoritesPage.module.css';

function FavoritesPage() {
  useEffect(() => {
    document.body.classList.remove('home');
    document.body.classList.add('app');
  }, []);

  return <div>Favorites Page</div>;
}

export default FavoritesPage;
