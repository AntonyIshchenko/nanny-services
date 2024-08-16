import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { db } from '../firebase/init.js';
// import { getDBData } from '../firebase/operations.js';
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

    // async function testData() {
    //   const resp = await getDBData(4, '2');
    //   console.log(resp);
    //   console.log(Array.isArray(resp.data));
    //   console.log(resp.data[resp.data.length - 1]);

    //   // if (Array.isArray(resp.data)) {
    //   //   resp.data.forEach(el => console.log(el));
    //   // }
    // }
    // testData();
  }, []);

  console.log(import.meta.env.DEV);

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
