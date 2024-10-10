import React from 'react'
import styled from 'styled-components'
import { Icon } from '../icon/Icon'

const socialItem = [
	{
		href: '#',
		iconId: 'git-social',
		width: '30',
		height: '31',
		viewBox: '0 0 30 31'
	},
	{
		href: '#',
		iconId: 'twitter',
		width: '30',
		height: '30',
		viewBox: '0 0 30 31'
	},
	{
		href: '#',
		iconId: 'linkedin',
		width: '30',
		height: '30',
		viewBox: '0 0 30 30'
	}

]

export const Social = () => {
	return (
		<SocialStyled>
			{socialItem.map((el, i) => {
				return <a key={i} href={el.href}>
					<Icon iconId={el.iconId} width={el.width} height={el.height} viewBox={el.viewBox} />
				</a>
			})}
		</SocialStyled>
	)
}

const SocialStyled = styled.div`
  display: flex;
  gap: 20px;
`