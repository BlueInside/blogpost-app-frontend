import { useRouteError } from 'react-router';
import styled from 'styled-components';
import Navbar from './components/Navbar';

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  color: #ffffff;
  background-color: #333333;
`;

const ErrorPageHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <ErrorPageContainer>
        <ErrorPageHeading>Something Went Wrong</ErrorPageHeading>
        <ErrorMessage>Sorry, an unexpected error has occurred.</ErrorMessage>
        <ErrorMessage>
          <i>{error?.statusText || error?.message}</i>
        </ErrorMessage>
      </ErrorPageContainer>
    </>
  );
}
