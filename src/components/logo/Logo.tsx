import React from 'react'
import styled from 'styled-components'
import { Icon } from '../icon/Icon'

export const Logo = () => {
	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<LogoHref href='#'>
			<Icon iconId={'greensock'}/>
		</LogoHref>
	)
}

const LogoHref = styled.a `
margin-right: auto;
`

