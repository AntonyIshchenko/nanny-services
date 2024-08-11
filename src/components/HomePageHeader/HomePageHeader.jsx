import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/nannies">Nannies</Link>
            </li>
          </ul>
          <ul className={css.buttonsList}>
            {!isLogged && <li>Log In</li>}
            {!isLogged && <li>Registration</li>}
            {isLogged && <li>Log out</li>}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HomePageHeader;
