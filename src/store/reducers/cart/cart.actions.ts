import Product from '../../../types/product.types'
import CartActionsTypes from './cart.action-types'

export const toggleCart = () => ({
  type: CartActionsTypes.toggleCart
})

export const addProductToCart = (payload: Product) => ({
  type: CartActionsTypes.addProductToCart,
  payload
})
