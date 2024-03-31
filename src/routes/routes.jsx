import { Link } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: (
      <>
        <Link to={'post'}>Posts</Link>
      </>
    ),
  },
  {
    path: 'post',
    element: (
      <>
        <Link to={'/'}>MainPage</Link>
      </>
    ),
  },
];

export default routes;
