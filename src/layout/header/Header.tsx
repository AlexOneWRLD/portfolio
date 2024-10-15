import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { HeaderMenu } from './headerMenu/HeaderMenu'
import { Social } from '../../components/social/Social'
import { Container } from '../../components/styles-components/container/Container'
import { FlexWrapper } from '../../components/styles-components/flexwrapper/FlexWrapper'
import { theme } from '../../styles/Theme'
import { MobileMenu } from './mobileMenu/MobileMenu'

const headerMenu = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact']
export const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<FlexWrapper align={'center'}>
					<Logo />
					<FlexWrapper gap={'51px'}>
						<HeaderMenu menuItems={headerMenu}></HeaderMenu>
						<MobileMenu menuItems={headerMenu}></MobileMenu>
						<SocialWrapper>
							<Social />
						</SocialWrapper>
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

const SocialWrapper = styled.div`
  @media ${theme.media.lowDisplay} {
    display: none;
  }
`