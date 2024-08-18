import { useState } from 'react';

import Button from '../Button/Button';
import NannyItemButton from '../NannyItemButton/NannyItemButton';
import NannyItemHeader from '../NannyItemHeader/NannyItemHeader';
import NannyItemFeatureList from '../NannyItemFeatureList/NannyItemFeatureList';
import NannyItemPhoto from '../NannyItemPhoto/NannyItemPhoto';
import NannyItemReviewsList from '../NannyItemReviewsList/NannyItemReviewsList';

import css from './NannyItem.module.css';

function NannyItem({ item = {} }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={css.container}>
      <div className={css.leftSide}>
        <NannyItemPhoto item={item} />
      </div>
      <div className={css.rightSide}>
        <NannyItemHeader item={item} />
        <NannyItemFeatureList item={item} />
        <p className={css.description}>{item.about}</p>
        {isOpen && (
          <>
            <NannyItemReviewsList list={Object.values(item.reviews)} />
            <div className={css.buttonsList}>
              <Button filled={true} className={css.appointment}>
                Make an appointment
              </Button>
              <NannyItemButton onClick={() => setIsOpen(false)}>
                Collapse
              </NannyItemButton>
            </div>
          </>
        )}
        {!isOpen && (
          <NannyItemButton onClick={() => setIsOpen(true)}>
            Read More
          </NannyItemButton>
        )}
      </div>
    </li>
  );
}

export default NannyItem;
