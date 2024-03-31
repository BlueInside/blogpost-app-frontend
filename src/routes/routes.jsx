import App from '../App';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'posts',
        element: <h2>Posts</h2>,
      },
    ],
  },
];

export default routes;
