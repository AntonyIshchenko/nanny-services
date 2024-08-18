import { lazy, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import AppBar from './AppBar/AppBar';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRoute.jsx';
import { db } from '../firebase/init.js';
import authSelectors from '../redux/auth/selectors.js';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const NanniesPage = lazy(() => import('../pages/NanniesPage/NanniesPage.jsx'));
const FavoritesPage = lazy(() =>
  import('../pages/FavoritesPage/FavoritesPage.jsx')
);

function App() {
  const theme = useSelector(authSelectors.theme);
  // const [dbConnected, setDbConnected] = useState(false);

  useEffect(() => {
    document.body.classList.remove('red', 'green', 'blue');
    document.body.classList.add(theme || 'red');
  }, [theme]);

  useEffect(() => {
    if (!db) {
      console.log('DB is not connected!');
    }
  }, []);

  return (
    <>
      <AppBar />
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nannies" element={<NanniesPage />} />
            <Route
              path="/favorites"
              element={
                <PrivateRoute component={<FavoritesPage />} redirectTo="/" />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
