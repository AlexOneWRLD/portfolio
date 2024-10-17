import React from 'react'
import styled from 'styled-components'
import { ColorText } from '../../../components/styles-components/colortext/ColorText'

export const Questions = () => {
	return (
		<QuestionsSection>
			<Text>For any questions please mail me:</Text>
			<Link href={'mailto:a.v.ovsyannikov@internet.ru'}><ColorText>a.v.ovsyannikov@internet.ru</ColorText></Link>
		</QuestionsSection>
	)
}


const QuestionsSection = styled.div`
  margin: 0 auto 205px;
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