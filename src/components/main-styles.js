import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background: ${({ theme }) => theme.themeContext.background};
`

export const Main = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
