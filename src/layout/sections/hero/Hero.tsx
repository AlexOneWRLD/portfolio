import React from 'react'
import styled from 'styled-components'
import Photo from '../../../assets/img/photo/photo.jpg'
import { FlexWrapper } from '../../../components/styles-components/flexwrapper/FlexWrapper'

export const Hero = () => {
	return (
		<SectionHero>
			<FlexWrapper justify={'space-around'} align={'center'}>
				<div>
					<span>Hi 👋</span>
					<h2>My name is Alex Ovsiannikov</h2>
					<h1>I build things for web</h1>
				</div>
				<PhotoImg src={Photo} alt={'Photo Alex Ovsiannikov'} />
			</FlexWrapper>
		</SectionHero>
	)
}

const PhotoImg = styled.img`
  width: 100%;
  max-width: 350px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 230px;
`

const SectionHero = styled.section `
  margin: 100px 0 190px;
  background-color: beige;
`
