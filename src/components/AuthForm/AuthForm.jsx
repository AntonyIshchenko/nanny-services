import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '../Button/Button';
import schemas from '../../schemas/auth.js';
import icons from '../../icons/sprite.svg';
import css from './AuthForm.module.css';

const signUpDefaultValues = () => ({
  name: '',
  email: '',
  password: '',
});

const logInDefaultValues = () => ({
  email: '',
  password: '',
});

function AuthForm({ logIn = false, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(
    logIn
      ? {
          defaultValues: logInDefaultValues(),
          resolver: yupResolver(schemas.logIn),
        }
      : {
          defaultValues: signUpDefaultValues(),
          resolver: yupResolver(schemas.signUp),
        }
  );

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <button className={css.closeButton} onClick={() => onClose(false)}>
        <svg width={32} height={32}>
          <use href={`${icons}#x`}></use>
        </svg>
      </button>
      <h2 className={css.heading}>{logIn ? 'Log In' : 'Registration'}</h2>
      <p className={css.text}>
        {logIn
          ? 'Welcome back! Please enter your credentials to access your account and continue your babysitter search.'
          : 'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.'}
      </p>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        {!logIn && (
          <div className={css.inputWrapper}>
            <input
              {...register('name')}
              className={css.input}
              type="text"
              placeholder="Name"
            />
            {errors.name && (
              <p className={css.errorText}>{`*${errors.name.message}`}</p>
            )}
          </div>
        )}
        <div className={css.inputWrapper}>
          <input
            {...register('email')}
            className={css.input}
            type="text"
            placeholder="Email"
          />
          {errors.email && (
            <p className={css.errorText}>{`*${errors.email.message}`}</p>
          )}
        </div>
        <div className={css.inputWrapper}>
          <input
            {...register('password')}
            className={css.input}
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p className={css.errorText}>{`*${errors.password.message}`}</p>
          )}
        </div>
        <Button type="submit" className={css.button} filled={true}>
          {logIn ? 'Log In' : 'Sign Up'}
        </Button>
      </form>
    </>
  );
}

export default AuthForm;
