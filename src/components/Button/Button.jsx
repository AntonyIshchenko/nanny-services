import css from './Button.module.css';

// type = 0 - transparent button
// type = 1 - filled button
function Button({ filled = false, className = '', children, ...restFields }) {
  return (
    <button
      type="button"
      className={`${css.button} ${className} ${
        filled ? css.filled : css.transparent
      }`}
      {...restFields}
    >
      {children}
    </button>
  );
}

export default Button;
