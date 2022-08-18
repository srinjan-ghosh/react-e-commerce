import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import './navigation.styles.scss'

const Navigation = () => {
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
