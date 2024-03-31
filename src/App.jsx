import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Imports routes
import routes from './routes/routes';

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
