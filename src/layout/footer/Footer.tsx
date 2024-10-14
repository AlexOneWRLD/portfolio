import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { Social } from '../../components/social/Social'
import { ColorText } from '../../components/styles-components/colortext/ColorText'
import { FlexWrapper } from '../../components/styles-components/flexwrapper/FlexWrapper'

const footerMenu = ['Home', 'About', 'Technologies', 'Projects', 'Contact']
export const Footer = () => {
	return (
		<FooterSection>
			<FlexWrapper align={'center'} padding={'0 0 50px 0'} gap={'100px'} justify={'space-between'} borderbt={'2px solid #42446e'}>
				<Logo />
				<FlexWrapper gap={'50px'}>
				<a href={'tel:+911234509876'}>+91 12345 09876</a>
				<a href={'mailto:a.v.ovsyannikov@internet.ru'}>a.v.ovsyannikov@internet.ru</a>
				</FlexWrapper>
				<Social />
			</FlexWrapper>
			<FlexWrapper align={'center'} padding={'50px 0 0 0'} gap={'35px'} justify={'space-between'}>
				<Menu menuItems={footerMenu}/>
				<Copy>Designed and built by <ColorText>Ovsyannikov AV</ColorText> with <ColorText>Love</ColorText>  & <ColorText>Coffee</ColorText></Copy>
			</FlexWrapper>
		</FooterSection>
	)
}


const FooterSection = styled.footer`
  margin-bottom: 60px;
`

const Copy = styled.p `
font-weight: 400;
font-size: 18px;
line-height: 1.44444;
text-align: center;
color: #a7a7a7;
`

