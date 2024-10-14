import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { Social } from '../../components/social/Social'
import { Container } from '../../components/styles-components/container/Container'
import { FlexWrapper } from '../../components/styles-components/flexwrapper/FlexWrapper'
import { theme } from '../../styles/Theme'

const headerMenu = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']
export const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<FlexWrapper align={'center'}>
					<Logo />
					<FlexWrapper gap={'51px'}>
						<Menu menuItems={headerMenu}></Menu>
						<Social />
					</FlexWrapper>
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
	background-color: ${theme.colors.primaryBg};
	
	
`