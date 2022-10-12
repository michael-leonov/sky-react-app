import styled from 'styled-components'

export const NavWrapper = styled.div`
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
`

export const LogoWrapper = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`
export const Burger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  cursor: pointer;
  position: relative;
`

export const BurgerLines = styled.span`
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  ::before,
  ::after {
    position: absolute;
    background-color: #d3d3d3;
    width: 100%;
    height: 1px;
    content: '';
    left: 0;
  }

  ::before {
    top: -6px;
  }

  ::after {
    top: 6px;
  }
`

export const NavMenuWrapper = styled.div`
  display: block;
  visibility: visible;
`

export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
`
