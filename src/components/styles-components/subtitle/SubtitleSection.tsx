import styled from 'styled-components'
import { font } from '../../../styles/Common'
import { theme } from '../../../styles/Theme'

export const SubtitleSection = styled.h3`
	${font({weight:400,lineHeight:0.8,color:theme.colors.subTitle, Fmax:32,Fmin:18})}
  text-align: center;
  margin-bottom: 150px;
	
	@media ${theme.media.mobile}{
		margin-bottom: 50px;
	}
`