import css from './NannyItemHeader.module.css';

import Icon from '../Icon/Icon';

function NannyItemHeader({ item = {} }) {
  const isFavotite = false;
  return (
    <div className={css.container}>
      <div className={css.headingContainer}>
        <p className={css.position}>Nanny</p>
        <h3 className={css.header}>{item.name}</h3>
      </div>
      <div className={css.infoContainer}>
        <ul className={css.list}>
          <li className={css.listItem}>
            <p className={css.text}>
              <span className={css.map}>
                <Icon name="map-pin" width={16} height={16} />
              </span>
              <span>{item.location}</span>
            </p>
          </li>
          <li className={css.listItem}>
            <p className={css.text}>
              <span className={css.star}>
                <Icon name="star" width={16} height={16} />
              </span>
              <span>{`Rating: ${item.rating}`}</span>
            </p>
          </li>
          <li className={css.listItem}>
            <p className={css.text}>
              <span>Price / 1 hour:</span>
              <span className={css.price}>{`${item.price_per_hour}$`}</span>
            </p>
          </li>
        </ul>
        <button
          type="button"
          className={`${css.button} ${isFavotite ? css.favorite : ''}`}
        >
          <Icon name="heart" width={26} height={26} />
        </button>
      </div>
    </div>
  );
}

export default NannyItemHeader;
