import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../components/StyledComponents/Theme.styled';
import GlobalStyles from '../components/StyledComponents/Global.Style';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <main>
          <Outlet />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
