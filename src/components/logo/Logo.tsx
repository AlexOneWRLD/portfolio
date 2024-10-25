import React from 'react'
import { animateScroll } from 'react-scroll';
import styled from 'styled-components'
import { Icon } from '../icon/Icon'

const options = {
  smooth: true,
};

export const Logo: React.FC = () => {
	return (
		<LogoHref onClick={()=>{animateScroll.scrollToTop(options)}}>
			<Icon iconId={'greensock'} ariaLabel={'greensock'}/>
		</LogoHref>
	)
}

const LogoHref = styled.a `
margin-right: auto;
	cursor: pointer;
`

