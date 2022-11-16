import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::before,::after {
      box-sizing: border-box;
    }
  }

  a {
    text-decoration:none;
    font-family: 'Stratos', sans-serif;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
  }

  ul li {
    list-style: none;
  }

  @font-face {
    font-family: 'Stratos';
    src: url('../fonts/Stratos-Regular.woff2') format('woff2'),
      url('../fonts/Stratos-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  html,body { 
    width: 100%;
    height: 100%;
    font-family: 'Stratos', sans-serif;
    color: ${({ theme }) => theme.themeContext.color};
    display: ${({ auth }) => (auth ? 'flex' : 'block')}; 
    justify-content: ${({ auth }) => (auth ? 'center' : 'normal')}; 
    align-items: ${({ auth }) => (auth ? 'center' : 'normal')};
    background:${({ theme }) => theme.themeContext.background};
    transition: all 0.4s ease-in-out;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`
