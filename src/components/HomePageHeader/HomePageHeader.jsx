import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import css from './HomePageHeader.module.css';

function HomePageHeader() {
  const isLogged = false;

  return (
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
                <Button className={css.button}>Log In</Button>
              </li>
            )}
            {!isLogged && (
              <li>
                <Button className={css.button} filled={true}>
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
  );
}

export default HomePageHeader;
