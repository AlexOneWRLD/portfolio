import React from 'react'
import { Logo } from '../../components/logo/Logo'
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu'
import { Social } from '../../components/social/Social'
import { Container } from '../../components/styles-components/container/Container'
import { FlexWrapper } from '../../components/styles-components/flexwrapper/FlexWrapper'
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu'
import  {S} from './Header_Styles'



export const Header : React.FC = () => {
	 const [width, setWidth] = React.useState(window.innerWidth);
   const breakpoint = 998;
	 
	  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

	
	return (
		<S.StyledHeader>
			<Container>
				<FlexWrapper align={'center'}>
					<Logo />
					<FlexWrapper gap={'51px'}>
						{width < breakpoint ? <MobileMenu aria-haspopup={true}></MobileMenu> : <DesktopMenu></DesktopMenu>}
						<S.SocialWrapper>
							<Social />
						</S.SocialWrapper>
					</FlexWrapper>
				</FlexWrapper>
			</Container>
		</S.StyledHeader>
	)
}

