import './App.css';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <h1>Welcome to My Blog</h1>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
