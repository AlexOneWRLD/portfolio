import styled from 'styled-components'
import { FlexWrapper } from '../../../components/styles-components/flexwrapper/FlexWrapper'
import { font } from '../../../styles/Common'
import { theme } from '../../../styles/Theme'

const SectionHero = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media ${theme.media.mobile} {
   padding-top: 150px;
	  margin-bottom: 150px;
	  
	  ${FlexWrapper}{
		  justify-content: center;
	  }
  }
`

const Title = styled.h1`
	${font({family:"'Poppins',sans-serif",weight:700,color: "#d9d9d9", lineHeight:1.2, Fmax:58,Fmin:25})};
	
	p {
		display: none;
	}
`


const PhotoImg = styled.img`
  width: 100%;
  max-width: 350px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 230px;
  z-index: 999;
  position: absolute;
  top: 5px;
  left: 5px;
	
	@media ${theme.media.mobile} {
		max-width: 280px;
	}
`

const PhotoWrapper = styled.div`
  position: relative;
  width: 360px;
  aspect-ratio: 1/1;
  border-radius: 230px;
  background: linear-gradient(0deg, #13b0f5 2.6%, #e70faa 100%);
  z-index: -1;

  @media ${theme.media.mobile} {
    max-width: 290px;
  }
`


export const  S = {
	SectionHero,
	Title,
	PhotoImg,
	PhotoWrapper,
}
