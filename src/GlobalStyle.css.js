import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', Arial, Helvetica, sans-serif;
      list-style: none;
      color: var(--black);
      
      /*Colors*/
      --red: #e8303a;
      --shaded-red: #d02b34;
      --blue: #33a8dd;
      --blue-2: #008aca;
      --transparent-blue: #7cc7e9bb;
      --transparent-blue-2: #7cc7e986;
      --transparent-blue-3: #7cc7e957;
      --orange: #ffa500;
      --orange-2: #df7e00;
      --green: #74c843;
      --green-2: #5cb12b;
      --white: #ffffff;
      --dark-blue: #2b357a;
      --shaded-blue: #262f6d;
      --transparent-dark-blue: #2b357af8;
      --black: #181818;
      --moderate-light-gray: #aaaaaa;
      --light-gray: #cfcfcf;
  }

  a {
    color: var(---white);
  }
`;
