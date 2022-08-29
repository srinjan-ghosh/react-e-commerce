import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
	const { cartItems, showCart, closeCart } = useContext(CartContext)
	const navigate = useNavigate()

	const goToCheckoutHandler = () => {
		navigate('/checkout')
	}

	return (
		<div
			className='cart-dropdown-container'
			onMouseEnter={() => showCart('cartDropdown')}
			onMouseLeave={() => closeCart('cartDropdown')}>
			<div className='cart-items'>
				{cartItems.length > 0 ? (
					cartItems.map((cartItem) => {
						return (
							<CartItem key={cartItem.id} cartItem={cartItem} />
						)
					})
				) : (
					<span className='empty-message'>Your cart is empty</span>
				)}
			</div>
			<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
		</div>
	)
}

export default CartDropdown
