import Button from '../Button/Button';
import icons from '../../icons/sprite.svg';
import css from './AuthForm.module.css';

function AuthForm({ isLogIn = false, onClose }) {
  return (
    <>
      <button className={css.closeButton} onClick={() => onClose(false)}>
        <svg width={32} height={32}>
          <use href={`${icons}#x`}></use>
        </svg>
      </button>
      <h2 className={css.heading}>{isLogIn ? 'Log In' : 'Registration'}</h2>
      <p className={css.text}>
        {isLogIn
          ? 'Welcome back! Please enter your credentials to access your account and continue your babysitter search.'
          : 'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.'}
      </p>
      <form className={css.form}>
        {!isLogIn && (
          <input
            className={css.input}
            name="name"
            type="text"
            placeholder="Name"
            required
          />
        )}
        <input
          className={css.input}
          name="email"
          type="text"
          placeholder="Email"
          required
        />
        <div>
          <input
            className={css.input}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <Button type="submit" className={css.button} filled={true}>
          {isLogIn ? 'Log In' : 'Sign Up'}
        </Button>
      </form>
    </>
  );
}

export default AuthForm;
