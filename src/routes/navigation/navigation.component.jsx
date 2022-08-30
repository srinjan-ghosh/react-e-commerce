import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import { CartContext } from '../../contexts/cart.context'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils.js'

import {
	LogoContainer,
	NavigationContainer,
	NavLink,
	NavLinksContainer,
} from './navigation.styles'

const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext)
	const { isCartOpen } = useContext(CartContext)
	// console.log(currentUser)

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrownLogo className='logo' />
				</LogoContainer>
				<NavLinksContainer>
					<NavLink to='/shop'>SHOP</NavLink>
					{currentUser ? (
						<NavLink as='span' onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to='/auth'>SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinksContainer>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			{/* all components will be renderd below the top component Navigation
		        the placing of outlet determines the order in nested routing
		    */}
			<Outlet />
		</Fragment>
	)
}

export default Navigation
