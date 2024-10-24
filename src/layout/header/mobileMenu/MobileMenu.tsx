import React from 'react'
import styled, { css } from 'styled-components'
import { Social } from '../../../components/social/Social'
import { theme } from '../../../styles/Theme'

export const MobileMenu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledMobileMenu>
			<BurgerButton isOpen={false}>
				<span></span>
			</BurgerButton>
			
			<WrapperMobileMenu isOpen={false}>
				<ul>
					{props.menuItems.map((item: string, i) => {
						return <ListItem key={i}>
							{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
							<Link href='#'>{item}</Link>
						</ListItem>
					})}
				</ul>
					<Social/>
			</WrapperMobileMenu>
		</StyledMobileMenu>
	)
}


const StyledMobileMenu = styled.nav`
	display: none;
	
  @media ${theme.media.lowDisplay} {
    display: block;
  }
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

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
	  flex-direction: column;
	  gap: 30px;
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

const ListItem = styled.li`
`

const Link = styled.a`
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.3;
  color: ${theme.colors.subTitle};
  transition: color 0.4s;

  &:hover {
    color: ${theme.colors.secondaryBg};
  }
`

