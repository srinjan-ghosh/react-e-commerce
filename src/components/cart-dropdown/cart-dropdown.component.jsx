import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'

import {
	CartDropdownContainer,
	EmptyMessage,
	CartItems,
} from './cart-dropdown.styles'

const CartDropdown = () => {
	const { cartItems, showCart, closeCart } = useContext(CartContext)
	const navigate = useNavigate()

	const goToCheckoutHandler = () => {
		navigate('/checkout')
	}

	return (
		<CartDropdownContainer
			onMouseEnter={() => showCart('cartDropdown')}
			onMouseLeave={() => closeCart('cartDropdown')}>
			<CartItems>
				{cartItems.length > 0 ? (
					cartItems.map((cartItem) => {
						return (
							<CartItem key={cartItem.id} cartItem={cartItem} />
						)
					})
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
		</CartDropdownContainer>
	)
}

export default CartDropdown
