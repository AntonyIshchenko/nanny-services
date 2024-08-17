import { Link } from 'react-router-dom';
import { useState } from 'react';

import ModalContainer from '../../components/ModalContainer/ModalContainer';
import AuthForm from '../../components/AuthForm/AuthForm';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import css from './HomePageHeader.module.css';

function HomePageHeader() {
  const isLogged = false;

  const [isOpen, setIsOpen] = useState(false);
  const [authLogInForm, setAuthLogInForm] = useState(false);

  const handleModalOpenClose = state => {
    setIsOpen(state);
  };

  const handleAuthButtonClick = isLogIn => {
    setIsOpen(true);
    setAuthLogInForm(isLogIn);
  };

  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <Logo />
          <div className={css.right}>
            <ul className={css.linksList}>
              <li>
                <Link className={css.link} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={css.link} to="/nannies">
                  Nannies
                </Link>
              </li>
            </ul>
            <ul className={css.buttonsList}>
              {!isLogged && (
                <li>
                  <Button
                    className={css.button}
                    onClick={() => handleAuthButtonClick(true)}
                  >
                    Log In
                  </Button>
                </li>
              )}
              {!isLogged && (
                <li>
                  <Button
                    className={css.button}
                    filled={true}
                    onClick={() => handleAuthButtonClick(false)}
                  >
                    Registration
                  </Button>
                </li>
              )}
              {isLogged && (
                <li>
                  <Button className={css.button}>Log out</Button>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
      <ModalContainer
        isOpen={isOpen}
        className={css.modal}
        onClose={handleModalOpenClose}
      >
        <AuthForm logIn={authLogInForm} onClose={handleModalOpenClose} />
      </ModalContainer>
    </>
  );
}

export default HomePageHeader;
