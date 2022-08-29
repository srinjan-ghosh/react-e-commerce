import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'

import { CategoriesContext } from '../../contexts/categories.context'

import './category.styles.scss'

const Category = () => {
	const { categoriesMap } = useContext(CategoriesContext)
	const { category } = useParams()

	// this is needed because categoriesMap is fetched asynchronously
	// hence a safeguard is needed
	const [products, setProducts] = useState(categoriesMap[category])

	useEffect(() => {
		setProducts(categoriesMap[category])
	}, [category, categoriesMap])

	return (
		<div className='category-container'>
			{products &&
				products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
		</div>
	)
}

export default Category
