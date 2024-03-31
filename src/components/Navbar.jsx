import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul>
        <li>Karol Pulawski</li>
        <li>
          <Link to={'blog'}>Blog</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
