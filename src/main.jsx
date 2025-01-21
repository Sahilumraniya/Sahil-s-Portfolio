import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Loading from './components/UI/Loading.jsx';

const Home = lazy(() => import('./page/Home.jsx'));
const ProductPage = lazy(() => import('./page/ProductPage.jsx'));
const SkillPage = lazy(() => import('./page/SkillPage.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/projects",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductPage />
          </Suspense>
        ),
      },
      {
        path: "/skills",
        element: (
          <Suspense fallback={<Loading />}>
            <SkillPage />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
);
