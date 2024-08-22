import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModalContainer from '../../components/ModalContainer/ModalContainer';
import AuthForm from '../../components/AuthForm/AuthForm';
import HomePageMobileMenu from '../HomePageMobileMenu/HomePageMobileMenu';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import MenuButton from '../MenuButton/MenuButton';
import authSelectors from '../../redux/auth/selectors';
import authOperations from '../../redux/auth/operations';
import css from './HomePageHeader.module.css';

function HomePageHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authLogInForm, setAuthLogInForm] = useState(false);
  const isLogged = useSelector(authSelectors.isLogged);
  const dispatch = useDispatch();

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
        <nav className={css.nav}>
          <Logo />
          <div className={css.right}>
            <ul className={css.linksList}>
              <li>
                <Link className={`${css.link} ${css.activeLink}`} to="/">
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
          <MenuButton
            className={css.menuButton}
            onClick={() => {
              setIsOpen(true);
              setIsMenuOpen(true);
            }}
          />
        </nav>
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
          <HomePageMobileMenu
            onClose={() => handleOpenClose(false, false)}
            {...{ handleAuthButtonClick, handleLogout }}
          />
        )}
      </ModalContainer>
    </>
  );
}

export default HomePageHeader;
