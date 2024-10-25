import React from 'react'
import { Logo } from '../../components/logo/Logo'
import { DesktopMenu } from '../header/headerMenu/desktopMenu/DesktopMenu'
import { Social } from '../../components/social/Social'
import { ColorText } from '../../components/styles-components/colortext/ColorText'
import { FlexWrapper } from '../../components/styles-components/flexwrapper/FlexWrapper'
import { S } from './Footer_Styles'

export const Footer: React.FC = () => {
	
	 const [width, setWidth] = React.useState(window.innerWidth);
   const breakpoint = 998;
	 
	  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

	return (
		<S.FooterSection>
			<FlexWrapper align={'center'} padding={'0 0 50px 0'} gap={'100px'} justify={'space-between'}
			             borderbt={'2px solid #42446e'}>
				<Logo />
				<FlexWrapper gap={'50px'} wrap={'wrap'}>
					<S.Link href={'tel:+911234509876'}>+91 12345 09876</S.Link>
					<S.Link href={'mailto:a.v.ovsyannikov@internet.ru'}>a.v.ovsyannikov@internet.ru</S.Link>
				</FlexWrapper>
				<S.SocialWrapper>
					<Social />
				</S.SocialWrapper>
			</FlexWrapper>
			<FlexWrapper align={'center'} padding={'50px 0 0 0'} gap={'35px'} justify={'space-between'}>
				{width < breakpoint ? '' :<DesktopMenu></DesktopMenu> }
				<S.Copy>Designed and built by <ColorText>Ovsyannikov
					AV</ColorText> with <ColorText>Love</ColorText> & <ColorText>Coffee</ColorText></S.Copy>
			</FlexWrapper>
		</S.FooterSection>
	)
}



