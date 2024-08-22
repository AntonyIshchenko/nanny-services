import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import NanniesList from '../../components/NanniesList/NanniesList';
import NannyItem from '../../components/NannyItem/NannyItem';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';

import favoritesSelector from '../../redux/favorites/selectors';
import css from './FavoritesPage.module.css';

function FavoritesPage() {
  const items = useSelector(favoritesSelector.nannies);
  const idList = useSelector(favoritesSelector.idList);

  useEffect(() => {
    document.body.classList.remove('home');
    document.body.classList.add('app');
  }, []);

  return (
    <>
      {idList.length > 0 && (
        <>
          <FiltersPanel />
          <NanniesList>
            {items.map(item => (
              <NannyItem key={item.id} item={item} />
            ))}
          </NanniesList>
        </>
      )}
      {idList.length === 0 && (
        <div className={css.container}>
          <p className={css.message}>
            {`It appears that you haven't added any nanny to your favorites yet. To
          get started, you can add nannies that you like to your favorites for
          easier access in the future.`}
          </p>
        </div>
      )}
    </>
  );
}

export default FavoritesPage;
