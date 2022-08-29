import { createContext, useState, useEffect } from 'react'

import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils'
// not needed as data is already in the database -> import SHOP_DATA from '../shop-data'

export const ProductsContext = createContext({
	products: [],
})

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([])
	// only once to store data to the database
	// useEffect(() => {
	// 	addCollectionAndDocuments('categories', SHOP_DATA)
	// }, [])
	const value = { products }
	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	)
}
