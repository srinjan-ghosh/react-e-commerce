import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles'

const CartIcon = () => {
	const {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		cartItemCount,
		showCart,
		closeCart,
	} = useContext(CartContext)

	// const getQuantity = () => {
	// 	let qty = 0
	// 	cartItems.forEach((cartItem) => {
	// 		qty += cartItem.quantity
	// 	})
	// 	return qty
	// }

	const toggleIsCartOpen = (event) => {
		console.log(event)
		setIsCartOpen(!isCartOpen)
	}

	return (
		<CartIconContainer
			onClick={toggleIsCartOpen}
			onMouseEnter={() => showCart('cartIcon')}
			onMouseLeave={() => closeCart('cartIcon')}>
			<ShoppingIcon />
			<ItemCount>{cartItemCount}</ItemCount>
		</CartIconContainer>
	)
}

export default CartIcon
