import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`

body {
    background-color: #0d0d0d; /* Dark background color */
    color: #fff; /* Text color */
    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
    font-family: 'Roboto', Arial, sans-serif; /* Set default font family */
  }  
`;

export default GlobalStyles;
