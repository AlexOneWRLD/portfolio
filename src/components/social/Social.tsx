import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { Icon } from '../icon/Icon'

const socialItem = [
	{
		href: '#',
		iconId: 'git-social',
		width: '30',
		height: '31',
		viewBox: '0 0 30 31',
		ariaLabel: 'github'
	},
	{
		href: '#',
		iconId: 'twitter',
		width: '30',
		height: '30',
		viewBox: '0 0 30 31',
		ariaLabel: 'twitter'
	},
	{
		href: '#',
		iconId: 'linkedin',
		width: '30',
		height: '30',
		viewBox: '0 0 30 30',
		ariaLabel: 'linkedin'
	}

]

export const Social = () => {
	return (
		<SocialStyled>
			{socialItem.map((el, i) => {
				return <a key={i} href={el.href}>
					<Icon iconId={el.iconId} width={el.width} height={el.height} viewBox={el.viewBox} ariaLabel={el.ariaLabel} />
				</a>
			})}
		</SocialStyled>
	)
}

const SocialStyled = styled.div`
  display: flex;
  gap: 20px;
	
	
`