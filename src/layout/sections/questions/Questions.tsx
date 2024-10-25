import React from 'react'
import { ColorText } from '../../../components/styles-components/colortext/ColorText'
import { S } from './Questions_Styles'

export const Questions: React.FC = () => {
	return (
		<S.QuestionsSection id={'contact'}>
			<S.Text>For any questions please mail me:</S.Text>
			<S.Link href={'mailto:a.v.ovsyannikov@internet.ru'}><ColorText>a.v.ovsyannikov@internet.ru</ColorText></S.Link>
		</S.QuestionsSection>
	)
}


