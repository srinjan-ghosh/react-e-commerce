import { Routes, Route } from 'react-router-dom'

import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'

// Shows the preview; also contains link to different categories
// creating nested routes. but not in App.js; holds all the routes to children route
const Shop = () => {
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	)
}

export default Shop
