import React from 'react'
import { S } from '../HeaderMenu_Styles'

const menuItems = [
	{ name: 'Home', href: 'home' },
	{ name: 'About', href: 'about' },
	{ name: 'Tech Stack', href: 'techstack' },
	{ name: 'Projects', href: 'projects' },
	{ name: 'Contact', href: 'contact' }
]

export const Menu: React.FC = () => {
	return (
		<ul>
			{menuItems.map((item, i) => {
				return <S.ListItem key={i}>
					<S.NavLink
						activeClass='active'
						to={item.href}
						smooth={true}
						spy={true}
						offset={-180}
						duration={1000}
					>{item.name}</S.NavLink>
				</S.ListItem>
			})}
		</ul>
	)
}


