import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Imports routes
import routes from './routes/routes';
import BigSpinner from './components/BigSpinner';

const router = createBrowserRouter(routes);
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<BigSpinner />} />
  </React.StrictMode>
);
