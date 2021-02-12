import 'react-toastify/dist/ReactToastify.css';

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #333;
  }

  input,
  button,
  body {
    font-family: 'Roboto', sans-serif;
  }
`;
