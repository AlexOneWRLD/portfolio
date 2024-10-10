import React from 'react'
import styled from 'styled-components'

export const Menu = (props: {menuItems:Array<string>}) => {
	return (
		<StyledMenu>
			<ul>
				{props.menuItems.map((item:string,i)=>{
					return <li key={i}>
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<a href="#">{item}</a>
					</li>
				})}
			</ul>
		</StyledMenu>
	)
}


const StyledMenu = styled.nav  `
ul {
	display: flex;
	gap: 30px;
}
`