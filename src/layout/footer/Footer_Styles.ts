import styled from 'styled-components'
import { FlexWrapper } from '../../components/styles-components/flexwrapper/FlexWrapper'
import { theme } from '../../styles/Theme'


const FooterSection = styled.footer`
  margin-bottom: 60px;
	
	@media ${theme.media.mobile}{
		${FlexWrapper} {
			gap: 50px;
		}
	}
`

const Copy = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.44444;
  text-align: center;
  color: #a7a7a7;
`

const Link = styled.a`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  color: ${theme.colors.subTitle};
	transition: color 0.4s;
	
	&:hover {
		color: ${theme.colors.secondaryBg};
	}

  @media ${theme.media.mobile} {
    font-size: 10px;
  }
`

const SocialWrapper = styled.div`
  @media ${theme.media.lowDisplay} {
    display: none;
  }
`


export const S = {
	FooterSection,
	Copy,
	Link,
	SocialWrapper
}