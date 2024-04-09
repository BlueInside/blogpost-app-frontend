import styled from 'styled-components';
import { Form, Link } from 'react-router-dom';

export const Flex1 = styled.div`
  flex: 1;
`;

export const StyledContainer = styled.div`
  display: flex;
  margin-top: 5vh;
  justify-content: center;
  height: 100vh;
`;

export const StyledHeading = styled.h1`
  text-align: center;
  color: #fff;
  font-family: 'Roboto', sans-serif;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primaryPink}; /* Your black color */
  text-decoration: none; /* Remove underline */
  margin-left: 5px; /* Adjust spacing */
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc; /* Add border for visual separation */
  border-radius: 8px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) =>
    theme.colors.primaryPink}; /* Example button color */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const PostContainer = styled.div`
  max-width: 800px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin: 20px auto;
  cursor: pointer;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const AuthorTimestamp = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #666; /* Adjust color as needed */
`;

export const Content = styled.p`
  max-width: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
