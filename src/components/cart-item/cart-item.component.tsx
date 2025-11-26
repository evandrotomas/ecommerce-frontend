import { FunctionComponent } from 'react'
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

// Utilities
import CartProduct from '../../types/cart.typs'

// Styles
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton
} from './cart-item.styles'
import { useDispatch } from 'react-redux'
import {
  decreaseCartProductQuantity,
  increaseCartProductQuantity,
  removeProductFromCart
} from '../../store/toolkit/cart/cart.slice'

interface CartItemProp {
  product: CartProduct
}

const CartItem: FunctionComponent<CartItemProp> = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddClick = () => {
    dispatch(increaseCartProductQuantity(product.id))
  }

  const handleDecreaseClick = () => {
    dispatch(decreaseCartProductQuantity(product.id))
  }

  const handleRemoveClick = () => {
    dispatch(removeProductFromCart(product.id))
  }

  return (
    <CartItemContainer>
      <CartItemImage $imageUrl={product.imageUrl} />

      <CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <CartItemQuantity>
          <AiOutlineMinus size={20} onClick={handleDecreaseClick} />
          <p>{product.quantity}</p>
          <AiOutlinePlus size={20} onClick={handleAddClick} />
        </CartItemQuantity>
      </CartItemInfo>

      <RemoveButton onClick={handleRemoveClick}>
        <AiOutlineClose size={25} />
      </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
