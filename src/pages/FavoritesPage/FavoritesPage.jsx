import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import NanniesList from '../../components/NanniesList/NanniesList';
import NannyItem from '../../components/NannyItem/NannyItem';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';

import favoritesSelector from '../../redux/favorites/selectors';

function FavoritesPage() {
  const items = useSelector(favoritesSelector.nannies);

  useEffect(() => {
    document.body.classList.remove('home');
    document.body.classList.add('app');
  }, []);

  return (
    <>
      <FiltersPanel />
      <NanniesList>
        {items.map(item => (
          <NannyItem key={item.id} item={item} />
        ))}
      </NanniesList>
    </>
  );
}

export default FavoritesPage;
