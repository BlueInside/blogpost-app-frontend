import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../components/StyledComponents/Theme.styled';
import GlobalStyles from '../components/StyledComponents/Global.Style';
import styled from 'styled-components';
const WelcomeMessage = styled.h1`
  margin-top: 20px;
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;
function App() {
  let location = useLocation();
  let isIndexPage = location.pathname === '/';
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <main>
          {isIndexPage && (
            <WelcomeMessage>Welcome to My BlogPost</WelcomeMessage>
          )}
          <Outlet />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
