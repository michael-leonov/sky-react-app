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

export const Logo = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
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
  background: ${(active) => (active ? '#d3d3d3' : 'transparent')};
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  right: ${(active) => (active ? 'calc(50% + 30px) ' : 'inherit')};
  transition: ${(active) => (active ? 'all 0.2s ease-in-out' : 'inherit')};

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
    top: ${(active) => (active ? '-6px' : '0')};
    transform: ${({ active }) => (active ? 'rotate(45deg)' : 'rotate(0)')};
    transition: ${(active) => (active ? 'all 0.3s ease-in-out' : 'inherit')};
  }

  ::after {
    top: ${(active) => (active ? '6px' : '0')};
    transform: ${({ active }) => (active ? 'rotate(-45deg)' : 'rotate(0)')};
    transition: ${(active) => (active ? 'all 0.3s ease-in-out' : 'inherit')};
  }
`

export const NavMenuWrapper = styled.div`
  display: block;
  visibility: visible;
`

export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
`
