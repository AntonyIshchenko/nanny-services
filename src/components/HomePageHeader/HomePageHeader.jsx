import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalContainer from '../../components/ModalContainer/ModalContainer';
import AuthForm from '../../components/AuthForm/AuthForm';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import authSelectors from '../../redux/auth/selectors';
import authOperations from '../../redux/auth/operations';
import css from './HomePageHeader.module.css';

function HomePageHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [authLogInForm, setAuthLogInForm] = useState(false);
  const isLogged = useSelector(authSelectors.isLogged);
  const dispatch = useDispatch();

  const handleModalOpenClose = state => {
    setIsOpen(state);
  };

  const handleAuthButtonClick = isLogIn => {
    setIsOpen(true);
    setAuthLogInForm(isLogIn);
  };

  const handleLogout = () => {
    dispatch(authOperations.logout());
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
                  <Button className={css.button} onClick={handleLogout}>
                    Log out
                  </Button>
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
