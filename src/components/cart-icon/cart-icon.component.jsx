import { useContext } from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { CartContext } from '../../contexts/cart.context'

import './cart-icon.styles.scss'

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartItems, cartItemCount } =
		useContext(CartContext)

	// const getQuantity = () => {
	// 	let qty = 0
	// 	cartItems.forEach((cartItem) => {
	// 		qty += cartItem.quantity
	// 	})
	// 	return qty
	// }

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

	return (
		<div className='cart-icon-container' onClick={toggleIsCartOpen}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{cartItemCount}</span>
		</div>
	)
}

export default CartIcon
