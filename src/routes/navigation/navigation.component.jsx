import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils.js'

import './navigation.styles.scss'

const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext)
	// console.log(currentUser)

	const signOutHandler = async () => {
		await signOutUser()
		setCurrentUser(null)
	}

	return (
		<Fragment>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<CrownLogo className='logo' />
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
					{currentUser ? (
						<span className='nav-link' onClick={signOutHandler}>
							SIGN OUT
						</span>
					) : (
						<Link className='nav-link' to='/auth'>
							SIGN IN
						</Link>
					)}
				</div>
			</div>
			{/* all components will be renderd below the top component Navigation 
                the placing of outlet determines the order in nested routing
            */}
			<Outlet />
		</Fragment>
	)
}

export default Navigation
