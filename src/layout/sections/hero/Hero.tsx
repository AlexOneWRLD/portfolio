import React from 'react'
import Photo from '../../../assets/img/photo/photo.jpg'
import { ColorText } from '../../../components/styles-components/colortext/ColorText'
import { FlexWrapper } from '../../../components/styles-components/flexwrapper/FlexWrapper'
import { S } from './Hero_Styles'
import Tilt from 'react-parallax-tilt'
import Typewriter from 'typewriter-effect'

export const Hero: React.FC = () => {
	return (
		<S.SectionHero id={'home'}>
			<FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'} gap={'50px 70px'}>
				<S.Title>Hi 👋 , <br />
					My name is <br />
					<ColorText>Alex Ovsiannikov</ColorText> <br />
					<p>I build things for web I frontend developer</p>
					<Typewriter
						options={{
							strings: ['I build things for web', 'I frontend developer'],
							autoStart: true,
							loop: true
						}}
					/>
				</S.Title>
				<Tilt>
					<S.PhotoWrapper>
						<S.PhotoImg src={Photo} alt={'Photo Alex Ovsiannikov'} />
					</S.PhotoWrapper>
				</Tilt>
			</FlexWrapper>
		</S.SectionHero>
	)
}



