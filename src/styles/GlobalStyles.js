import { createGlobalStyle } from 'styled-components';

const theme = {
  colors: {
    primary: '#6C25FF',
    // --- THIS IS THE ONLY LINE THAT CHANGED ---
    // Before: secondary: '#CAC2F8' (very light purple)
    // After: A darker, more noticeable purple for secondary actions.
    secondary: '#AD9BF6',
    // -----------------------------------------
    text: '#1D1D1D',
    textLight: '#999999',
    border: '#CBCBCB',
    disabled: '#CBCBCB',
    white: '#FFFFFF',
    background: '#F7F8F9',
  },
  fonts: {
    main: 'Rubik, sans-serif', // A good, clean font similar to the design
  },
};

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: #E5E5E5; // The outer gray background
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export { GlobalStyles, theme };