import { S } from '../HeaderMenu_Styles'

const menuItems = [
	{ name: 'Home', href: 'home' },
	{ name: 'About', href: 'about' },
	{ name: 'Tech Stack', href: 'techstack' },
	{ name: 'Projects', href: 'projects' },
	{ name: 'Contact', href: 'contact' }
]

type Props = {
	onClose?: (isOpen: boolean)=>void
}

// export const Menu: React.FC<Props> = (props) => {
	export const Menu = ({onClose}:Props) => {
		return (
			<ul>
				{menuItems.map((item, i) => {
					return <S.ListItem key={i}>
						<S.NavLink
							onClick={()=>{onClose?.(false)}}
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



