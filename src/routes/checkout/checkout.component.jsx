import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

const CheckOut = () => {
	const { cartItems } = useContext(CartContext)

	return (
		<div>
			{cartItems.map((cartItem) => {
				const { id, name, price, quantity } = cartItem
				return (
					<div key={id}>
						<h2>{name}</h2>
						<p>{price}</p>
						<p>{quantity}</p>
					</div>
				)
			})}
		</div>
	)
}

export default CheckOut
