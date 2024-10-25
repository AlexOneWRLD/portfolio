import React, {useState} from 'react'
import { Social } from '../../../../components/social/Social'
import { S } from '../HeaderMenu_Styles'
import { Menu } from '../menu/Menu'

export const MobileMenu: React.FC = () => {
	const [menuIsOpen, setmenuIsOpen] = useState(false)
	const onBurgerBtnClick = () =>{
		setmenuIsOpen(!menuIsOpen);
	}
	return (
		<S.StyledMobileMenu>
			<S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
				<span></span>
			</S.BurgerButton>
			
			<S.WrapperMobileMenu isOpen={menuIsOpen} onClick={()=>{setmenuIsOpen(false)}}>
				<Menu />
					<Social/>
			</S.WrapperMobileMenu>
		</S.StyledMobileMenu>
	)
}



