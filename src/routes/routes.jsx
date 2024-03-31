import App from '../App';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'blog',
        element: <h2>Posts</h2>,
      },
    ],
  },
];

export default routes;
