import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { Container } from '../../components/styles-components/container/Container'
import { FlexWrapper } from '../../components/styles-components/flexwrapper/FlexWrapper'

const headerMenu = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']
export const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<FlexWrapper justify={'space-between'} align={'center'}>
					<Logo />
					<Menu menuItems={headerMenu} ></Menu>
				</FlexWrapper>
			</Container>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
  padding: 40px 0 0 0;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
`