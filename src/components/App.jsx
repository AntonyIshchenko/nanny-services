import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { db } from '../utils/firebase-init.js';
import { getDBData } from '../utils/firebase-operations.js';
import AppBar from './AppBar/AppBar';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const NanniesPage = lazy(() => import('../pages/NanniesPage/NanniesPage.jsx'));
const FavoritesPage = lazy(() =>
  import('../pages/FavoritesPage/FavoritesPage.jsx')
);

function App() {
  // const [dbConnected, setDbConnected] = useState(false);

  useEffect(() => {
    document.body.classList.remove();
    document.body.classList.add('red');
  }, []);

  useEffect(() => {
    if (!db) {
      console.log('DB is not connected!');
    }

    getDBData();
  }, []);

  return (
    <>
      <AppBar />
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nannies" element={<NanniesPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
