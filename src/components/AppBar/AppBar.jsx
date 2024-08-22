import { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ModalContainer from '../../components/ModalContainer/ModalContainer';
import AuthForm from '../../components/AuthForm/AuthForm';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import MenuButton from '../MenuButton/MenuButton';
import authSelectors from '../../redux/auth/selectors';
import authOperations from '../../redux/auth/operations';
import css from './AppBar.module.css';
import Icon from '../Icon/Icon';
import AppMobileMenu from '../AppMobileMenu/AppMobileMenu';

function AppBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authLogInForm, setAuthLogInForm] = useState(false);
  const location = useLocation();
  const isLogged = useSelector(authSelectors.isLogged);
  const user = useSelector(authSelectors.user);
  const dispatch = useDispatch();

  if (location.pathname === '/') return <></>;

  const handleOpenClose = (isOpenValue, isMenuOpenValue) => {
    setIsOpen(isOpenValue);
    setIsMenuOpen(isMenuOpenValue);
  };

  const handleAuthButtonClick = isLogIn => {
    setIsOpen(true);
    setIsMenuOpen(false);
    setAuthLogInForm(isLogIn);
  };

  const handleLogout = () => {
    dispatch(authOperations.logout())
      .unwrap()
      .then(() => {
        setIsMenuOpen(false);
        setIsOpen(false);
      });
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
          <MenuButton
            className={css.menuButton}
            onClick={() => {
              setIsOpen(true);
              setIsMenuOpen(true);
            }}
          />
        </div>
      </header>
      <ModalContainer
        isOpen={isOpen}
        className={isMenuOpen ? css.menuModal : css.modal}
        onClose={() => handleOpenClose(false, false)}
      >
        {!isMenuOpen && (
          <AuthForm
            logIn={authLogInForm}
            onClose={() => handleOpenClose(false, false)}
          />
        )}
        {isMenuOpen && (
          <AppMobileMenu
            onClose={() => handleOpenClose(false, false)}
            {...{ handleAuthButtonClick, handleLogout }}
          />
        )}
      </ModalContainer>
    </>
  );
}

export default AppBar;
