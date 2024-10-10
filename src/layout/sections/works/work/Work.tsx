import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'

type WorkPropsType = {
	title: string
	text: string
	stack: string
	src?: string
	alt?: string
	
}

export const Work = (props: WorkPropsType) => {
	return (
		<StyledWork>
			<Image src={props.src} alt={props.alt} />
			<Title>{props.title}</Title>
			<Text>{props.text}</Text>
			<Stack>Tech stack :<AllStack>{props.stack}</AllStack></Stack>
			<Link href={'#'}><Icon iconId={'link'} width={'20'} height={'20'} viewBox={'0 0 20 20'} />Live Preview</Link>
			<Link href={'#'}><Icon iconId={'git-social'} width={'20'} height={'20'} viewBox={'0 0 30 30'} />View Code</Link>
		</StyledWork>
	)
}


const StyledWork = styled.div`
  border-radius: 20px;
  width: 375px;
  height: 567px;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
  background: #363636;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  max-width: 375px;
  margin-bottom: 27px;
  object-fit: cover;
`


const Link = styled.a`
  display: inline-block;

  &:not(:last-child) {
    margin: 0 58px 0 30px;
  }

  font-weight: 400;
  font-size: 16px;
  line-height: 1.625;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #fff;
	
	svg{
		margin-right: 12px;
	}
`

const Title = styled.h3`
  font-weight: 500;
  font-size: 28px;
  line-height: 1;
  color: #ccc;
  margin: 0 31px 17px 28px;
`

const Text = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 1.4;
  color: #ccc;
  margin: 0 31px 12px 28px;
`

const Stack = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: #ccc;
  margin: 0 31px 21px 28px;
`

const AllStack = styled.span`
  font-weight: 300;
  font-size: 14px;
`