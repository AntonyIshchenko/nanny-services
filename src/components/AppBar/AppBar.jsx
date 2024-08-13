import { useLocation, NavLink } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import css from './AppBar.module.css';

function AppBar() {
  const location = useLocation();
  const isLogged = false;

  if (location.pathname === '/') return <></>;

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
              <Button className={css.button}>Log out</Button>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default AppBar;
