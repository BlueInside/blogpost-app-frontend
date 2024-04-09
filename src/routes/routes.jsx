import App from './App';
import Blog from './Blog';
import About from './About';
import ErrorPage from '../error';
import PostDetail from './PostDetail';
import { action as addCommentAction } from '../addComment';
import { loader as commentsLoader } from '../getComments';

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
          {
            path: 'post/:postId',
            element: <PostDetail />,
            loader: commentsLoader,
            children: [{ path: 'comments', action: addCommentAction }],
          },
        ],
      },
    ],
  },
];

export default routes;
