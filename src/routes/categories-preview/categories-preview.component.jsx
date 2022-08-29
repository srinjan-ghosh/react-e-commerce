import { useContext } from 'react'
import CategoryPreview from '../../components/category-preview/category-preview.component'

import { CategoriesContext } from '../../contexts/categories.context'

import './categories-preview.styles.scss'

const CategoriesPreview = () => {
	const { categoriesMap } = useContext(CategoriesContext)

	return (
		<div className='category-preview-container'>
			{Object.keys(categoriesMap).map((title) => {
				return (
					<CategoryPreview
						key={title}
						title={title}
						products={categoriesMap[title]}
					/>
				)
			})}
		</div>
	)
}

export default CategoriesPreview