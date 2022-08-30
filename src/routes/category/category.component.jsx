import { useContext, useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'

import { CategoriesContext } from '../../contexts/categories.context'

import { CategoryTitle, CategoryContainer } from './category.styles'

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
		<Fragment>
			<CategoryTitle>{category.toUpperCase()}</CategoryTitle>
			<CategoryContainer>
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</CategoryContainer>
		</Fragment>
	)
}

export default Category
