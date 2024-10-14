import React from 'react'
import styled from 'styled-components'
import Photo from '../../../assets/img/photo/photo.jpg'
import { ColorText } from '../../../components/styles-components/colortext/ColorText'
import { FlexWrapper } from '../../../components/styles-components/flexwrapper/FlexWrapper'

export const Hero = () => {
	return (
		<SectionHero>
			<FlexWrapper justify={'space-between'} align={'center'}>
				<Title>Hi 👋 , <br />
					My name is <br />
					<ColorText>Alex Ovsiannikov</ColorText> <br />
					I build things for web</Title>
				<PhotoWrapper>
					<PhotoImg src={Photo} alt={'Photo Alex Ovsiannikov'} />
				</PhotoWrapper>
			</FlexWrapper>
		</SectionHero>
	)
}

const SectionHero = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 58px;
  line-height: 1.2069;
  letter-spacing: -0.02em;
  color: #d9d9d9;
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
`

const PhotoWrapper = styled.div`
  position: relative;
  width: 360px;
  height: 360px;
  border-radius: 230px;
  background: linear-gradient(0deg, #13b0f5 2.6%, #e70faa 100%);
  z-index: -1;
`


