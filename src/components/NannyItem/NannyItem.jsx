import css from './NannyItem.module.css';

function NannyItem({ item = {} }) {
  return <li className={css.container}>{JSON.stringify(item)}</li>;
}

export default NannyItem;
