import { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ModalContainer from '../../components/ModalContainer/ModalContainer';
import AuthForm from '../../components/AuthForm/AuthForm';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import authSelectors from '../../redux/auth/selectors';
import authOperations from '../../redux/auth/operations';
import css from './AppBar.module.css';
import Icon from '../Icon/Icon';

function AppBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [authLogInForm, setAuthLogInForm] = useState(false);
  const location = useLocation();
  const isLogged = useSelector(authSelectors.isLogged);
  const user = useSelector(authSelectors.user);
  const dispatch = useDispatch();

  if (location.pathname === '/') return <></>;

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
        <div className={css.container}>
          <Logo />
          <nav className={css.nav}>
            <ul className={css.linksList}>
              <li>
                <NavLink className={css.link} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={css.link} to="/nannies">
                  Nannies
                </NavLink>
              </li>
              {isLogged && (
                <li>
                  <NavLink className={css.link} to="/favorites">
                    Favorites
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
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
                  onClick={() => handleAuthButtonClick(false)}
                >
                  Registration
                </Button>
              </li>
            )}
            {isLogged && (
              <li>
                <Button className={css.userButton}>
                  <span className={css.icon}>
                    <Icon width={24} height={24} name="user" />
                  </span>
                  <span className={css.userName}>
                    {user.displayName || 'User'}
                  </span>
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

export default AppBar;
