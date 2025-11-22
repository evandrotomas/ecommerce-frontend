import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

// Utilities
import { CartContext } from '../../contexts/cart.context'
import { useAppSelector } from '../../hooks/redux.hooks'

// Components
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

// Styles
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './cart.styles'
import { useDispatch } from 'react-redux'
import { toggleCart } from '../../store/reducers/cart/cart.actions'

const Cart: FunctionComponent = () => {
  const { isVisible, products } = useAppSelector((state) => state.cartReducer)
  const { productsTotalPrice, productsCount } = useContext(CartContext)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleCheckoutClick = () => {
    navigate('/checkout')

    dispatch(toggleCart())
  }

  const handleEscapeAreaClick = () => {
    dispatch(toggleCart())
  }

  return (
    <CartContainer $isVisible={isVisible}>
      <CartEscapeArea onClick={handleEscapeAreaClick} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {/* produtos */}
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        {productsCount > 0 && (
          <CartTotal>Total: R$ {productsTotalPrice}</CartTotal>
        )}

        {productsCount > 0 && (
          <CustomButton
            startIcon={<BsCartCheck />}
            onClick={handleCheckoutClick}
          >
            Ir para Checkout
          </CustomButton>
        )}

        {productsCount === 0 && (
          <p style={{ textAlign: 'center', marginTop: '50px' }}>
            Seu carrinho está vázio!
          </p>
        )}
      </CartContent>
    </CartContainer>
  )
}

export default Cart
