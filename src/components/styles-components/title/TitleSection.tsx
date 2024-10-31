import styled from 'styled-components'
import { font } from '../../../styles/Common'
import { theme } from '../../../styles/Theme'

export const TitleSection = styled.h2 `
	${font({weight:700,lineHeight:0.5,color:theme.colors.font,Fmax:48,Fmin:28})}
  text-align: center;
  margin-bottom: 50px;
`