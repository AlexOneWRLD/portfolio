import styled, { css } from 'styled-components'
import { theme } from '../../../styles/Theme'
import { Link } from 'react-scroll';


const ListItem = styled.li`
`

const NavLink = styled(Link)`
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.3;
	cursor: pointer;
  color: ${theme.colors.subTitle};
	transition: color 0.4s;
	
	&:hover,
	&.active{
		color: ${theme.colors.secondaryBg};
	}
`

const StyledDesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 65px;
  }
`

const StyledMobileMenu = styled.nav`
`

const WrapperMobileMenu = styled.div<{isOpen: boolean}> `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(54, 54, 54, 0.95);
  display: none;
	transition: background-color 0.4s;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
	  flex-direction: column;
	  gap: 30px;
	   background-color: rgba(54, 54, 54, 0.95);
  `}
  
  ul {
    display: flex;
    gap: 65px;
    flex-direction: column;
    align-items: center;
  }

`

const BurgerButton = styled.button <{isOpen: boolean}>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -110px;
  right: -120px;
	z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 0;
    bottom: 0;
	  transition: transform 0.4s;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    
    &::before,
    &::after {
      content: '';
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      left: 0;
      bottom: 0;
	    transition:transform 0.4s ;
    }

    &::before {
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg)translateY(0);
      `}
    }


    &::after {
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg)translateY(0);
      `}
    }
  }
	
`



export const  S = {
	ListItem,
	NavLink,
	StyledDesktopMenu,
	BurgerButton,
	StyledMobileMenu,
	WrapperMobileMenu
}