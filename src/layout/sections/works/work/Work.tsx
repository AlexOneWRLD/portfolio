import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'
import { FlexWrapper } from '../../../../components/styles-components/flexwrapper/FlexWrapper'
import { font } from '../../../../styles/Common'
import { theme } from '../../../../styles/Theme'

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
			<Stack>Tech stack : <AllStack>{props.stack}</AllStack></Stack>
			<FlexWrapper>
			<Link href={'#'}><Icon iconId={'link'} width={'20'} height={'20'} viewBox={'0 0 20 20'} />Live Preview</Link>
			<Link href={'#'}><Icon iconId={'git-social'} width={'20'} height={'20'} viewBox={'0 0 30 30'} />View Code</Link>
			</FlexWrapper>
		</StyledWork>
	)
}


const StyledWork = styled.div`
  border-radius: 20px;
  max-width: 375px;
  height: 567px;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
  background: #363636;
	
	@media ${theme.media.mobile}{
		height: 490px;
	}
`

const Image = styled.img`
  width: 100%;
  max-width: 375px;
  margin-bottom: 27px;
  object-fit: cover;
`


const Link = styled.a`
	display: flex;
	align-items: center;
	
  &:not(:last-child) {
    margin: 0 58px 0 30px;
  }
	
	${font({weight:400,lineHeight:1.6,color:"#fff",Fmax:16,Fmin:12})}
  text-decoration: underline;
  text-decoration-skip-ink: none;
  transition: color 0.4s, fill 0.4s;

  svg {
    margin-right: 12px;
  }

  &:hover {
    color: #2e6596;
  }
`

const Title = styled.h3`
	${font({weight:500,lineHeight:1,color:"#ccc",Fmax:28,Fmin:20})}
  margin: 0 31px 17px 28px;
`

const Text = styled.p`
	${font({weight:300,lineHeight:1.4,color:"#ccc",Fmax:18,Fmin:12})}
  margin: 0 31px 12px 28px;
`

const Stack = styled.p`
  ${font({ weight: 400, lineHeight: 1.6, color: "#ccc", Fmax: 16, Fmin: 10 })}
  margin: 0 31px 21px 28px;
`

const AllStack = styled.span`
  ${font({ weight: 300, Fmax: 14, Fmin: 8 })}
`