import App from './App';
import Blog from './Blog';
import About from './About';
import PostDetail from '../components/PostDetail';
import ErrorPage from './error';
const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { path: 'about-me', element: <About /> },
          {
            path: 'blog',
            element: <Blog />,
          },
          { path: 'post/:postId', element: <PostDetail /> },
        ],
      },
    ],
  },
];

export default routes;
