import { Outlet } from 'react-router'

const Navigation = () => {
	return (
		<div>
			<div>
				<h1>Navigation Bar</h1>
			</div>
			{/* all components will be renderd below the top component Navigation 
          the placing of outlet determines the order in nested routing
      */}
			<Outlet />
		</div>
	)
}

export default Navigation
