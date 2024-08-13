import css from './Button.module.css';

// type = 0 - transparent button
// type = 1 - filled button
function Button({ filled = false, className = '', children }) {
  return (
    <button
      type="button"
      className={`${css.button} ${className} ${
        filled ? css.filled : css.transparent
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
