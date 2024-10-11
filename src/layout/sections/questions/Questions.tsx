import React from 'react'
import styled from 'styled-components'

export const Questions = () => {
	return (
		<QuestionsSection>
			<Text>For any questions please mail me:</Text>
			<Link href={'mailto:a.v.ovsyannikov@internet.ru'}>a.v.ovsyannikov@internet.ru</Link>
		</QuestionsSection>
	)
}


const QuestionsSection = styled.div `
  margin: 0 auto 205px;
`

const  Text = styled.p `
  padding: 0 179px;
  font-weight: 700;
  font-size: 58px;
  line-height: 1.2069;
  letter-spacing: -0.02em;
  color: #ccc;
`

const Link = styled.a `
font-weight: 700;
font-size: 58px;
line-height: 1.2069;
letter-spacing: -0.02em;
text-align: center;
background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
background-clip: text;
	text-decoration: none;
	padding: 0 251px;
`