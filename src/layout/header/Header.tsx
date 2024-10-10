import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { Social } from '../../components/social/Social'

const headerMenu = ['Home','About','Tech Stack','Projects','Contact',]
export const Header = () => {
	return (
		<StyledHeader>
			<Logo />
			<Menu menuItems={headerMenu} />
			<Social/>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
  background-color: #000000;
	display: flex;
	justify-content: space-between;
	align-items: center;
`