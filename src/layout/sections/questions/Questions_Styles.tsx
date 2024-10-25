import styled from 'styled-components'
import { theme } from '../../../styles/Theme'


const QuestionsSection = styled.div`
  position: relative;
	margin: 0 auto 205px;
	background-color: ${theme.colors.primaryBg};
`

const Text = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: calc((100vw - 320px) / (1600 - 320) * (58 - 25) + 25px);
  line-height: 1.2069;
  letter-spacing: -0.02em;
  color: #ccc;
`

const Link = styled.a`
  display: block;
	text-align: center;
	font-weight: 700;
  font-size: calc((100vw - 320px) / (1600 - 320) * (58 - 20) + 20px);
  line-height: 1.2;
`

export const S = {
	QuestionsSection,
	Text,
	Link
}