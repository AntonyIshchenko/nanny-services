import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NanniesList from '../../components/NanniesList/NanniesList';
import NannyItem from '../../components/NannyItem/NannyItem';
import favoritesSelector from '../../redux/favorites/selectors';
import css from './FavoritesPage.module.css';

function FavoritesPage() {
  const items = useSelector(favoritesSelector.nannies);

  useEffect(() => {
    document.body.classList.remove('home');
    document.body.classList.add('app');
  }, []);

  return (
    <>
      <NanniesList>
        {items.map(item => (
          <NannyItem key={item.id} item={item} />
        ))}
      </NanniesList>
    </>
  );
}

export default FavoritesPage;
