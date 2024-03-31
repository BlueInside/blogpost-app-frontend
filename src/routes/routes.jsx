import App from '../App';
import Blog from '../components/Blog';
import About from '../components/About';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'about-me', element: <About /> },
      {
        path: 'blog',
        element: <Blog />,
      },
    ],
  },
];

export default routes;
