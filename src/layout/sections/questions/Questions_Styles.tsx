import styled from 'styled-components'
import { font } from '../../../styles/Common'
import { theme } from '../../../styles/Theme'


const QuestionsSection = styled.div`
  position: relative;
	margin: 0 auto 205px;
	background-color: ${theme.colors.primaryBg};
`

const Text = styled.p`
	${font({weight:700, color:theme.colors.font,lineHeight:1.2,Fmax:58,Fmin:25})}
  text-align: center;
	letter-spacing: -0.02em;
`

const Link = styled.a`
	${font({weight:700, lineHeight:1.2,Fmax:58,Fmin:20})}
  display: block;
	text-align: center;
`

export const S = {
	QuestionsSection,
	Text,
	Link
}