import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import servSelect from '../../redux/services/selectors.js';
import { getNannies } from '../../redux/services/operations';
import NanniesList from '../../components/NanniesList/NanniesList';
import NannyItem from '../../components/NannyItem/NannyItem';
import Button from '../../components/Button/Button';
import css from './NanniesPage.module.css';

function isDevMode() {
  return import.meta.env.DEV;
}

function NanniesPage() {
  const [devRun, setDevRun] = useState(isDevMode);
  const items = useSelector(servSelect.nannies);
  const isEnd = useSelector(servSelect.isEnd);
  // const isLoading = useSelector(servSelect.isLoading);
  // const isError = useSelector(servSelect.isError);

  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList.remove('home');
    document.body.classList.add('app');
  }, []);

  useEffect(() => {
    if (items.length === 0 && !devRun && !isEnd) {
      dispatch(getNannies());
    }

    if (devRun) setDevRun(false);
  }, [dispatch, items, isEnd, devRun]);

  const handleLoadMore = () => {
    dispatch(getNannies());
  };

  return (
    <>
      <NanniesList>
        {items.map(item => (
          <NannyItem key={item.id} item={item} />
        ))}
      </NanniesList>
      {!isEnd && (
        <Button className={css.loadMore} filled={true} onClick={handleLoadMore}>
          Load more
        </Button>
      )}
    </>
  );
}

export default NanniesPage;
