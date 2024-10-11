import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { Social } from '../social/Social'

export const Menu = (props: { menuItems: Array<string> }) => {
	return (
		<StyledHeaderMenu>
			<ul>
				{props.menuItems.map((item: string, i) => {
					return <ListItem key={i}>
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<Link href='#'>{item}</Link>
					</ListItem>
				})}
				<Social />
			</ul>
			
		</StyledHeaderMenu>
	)
}


const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 65px;
  }
`

const ListItem = styled.li`
`

const Link = styled.a`
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.3;
  color: ${theme.colors.subTitle};
	transition: color 0.4s;
	
	&:hover {
		color: ${theme.colors.secondaryBg};
	}
`