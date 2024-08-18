import { useLocation, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import authSelectors from '../../redux/auth/selectors';
import authOperations from '../../redux/auth/operations';
import css from './AppBar.module.css';

function AppBar() {
  const location = useLocation();
  const isLogged = useSelector(authSelectors.isLogged);
  const dispatch = useDispatch();

  if (location.pathname === '/') return <></>;

  const handleLogout = () => {
    dispatch(authOperations.logout);
  };

  return (
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
            <li>
              <NavLink className={css.link} to="/favorites">
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul className={css.buttonsList}>
          {!isLogged && (
            <li>
              <Button className={css.button}>Log In</Button>
            </li>
          )}
          {!isLogged && (
            <li>
              <Button className={css.button}>Registration</Button>
            </li>
          )}
          {isLogged && (
            <li>
              <Button className={css.userButton}>Username</Button>
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
  );
}

export default AppBar;
