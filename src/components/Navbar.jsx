import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to={'about-me'}>Karol Pulawski</Link>
        </li>
        <li>
          <Link to={'blog'}>Blog</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
