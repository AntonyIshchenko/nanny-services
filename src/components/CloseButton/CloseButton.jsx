import Icon from '../Icon/Icon';
import css from './CloseButton.module.css';

function CloseButton({ onClose }) {
  return (
    <button className={css.button} onClick={onClose}>
      <Icon width={32} height={32} name="x" />
    </button>
  );
}

export default CloseButton;
