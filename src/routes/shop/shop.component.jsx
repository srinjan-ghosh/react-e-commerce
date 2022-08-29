import { useContext, Fragment } from 'react'
import CategoryPreview from '../../components/category-preview/category-preview.component'
import ProductCard from '../../components/product-card/product-card.component'

import { CategoriesContext } from '../../contexts/categories.context'

import './shop.styles.scss'

const Shop = () => {
	const { categoriesMap } = useContext(CategoriesContext)

	return (
		<div className='shop-container'>
			{Object.keys(categoriesMap).map((title) => {
				return (
					<CategoryPreview
						title={title}
						products={categoriesMap[title]}
					/>
				)
			})}
		</div>
	)
}

export default Shop
