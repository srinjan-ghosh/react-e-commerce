import { createContext, useState, useEffect } from 'react'

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'
// not needed as data is already in the database -> import SHOP_DATA from '../shop-data'

// refactoring from products to categories
export const CategoriesContext = createContext({
	categories: {},
})

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({})

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments()
			// console.log(categoryMap)
			setCategoriesMap(categoryMap)
		}

		getCategoriesMap()
	}, [])

	// only once to store data to the database
	// useEffect(() => {
	// 	addCollectionAndDocuments('categories', SHOP_DATA)
	// }, [])
	const value = { categoriesMap }
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	)
}
