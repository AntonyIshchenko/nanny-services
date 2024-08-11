import { useLocation } from 'react-router-dom';

import css from './AppBar.module.css';

function AppBar() {
  const location = useLocation();

  if (location.pathname === '/') return <></>;

  return <header>header</header>;
}

export default AppBar;
