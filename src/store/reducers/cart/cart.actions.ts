import Product from '../../../types/product.types'
import CartActionsTypes from './cart.action-types'

export const toggleCart = () => ({
  type: CartActionsTypes.toggleCart
})

export const addProductToCart = (payload: Product) => ({
  type: CartActionsTypes.addProductToCart,
  payload
})

export const removeProductFromCart = (payload: string) => ({
  type: CartActionsTypes.removeProductFromCart,
  payload
})

export const increaseCartProductQuantity = (payload: string) => ({
  type: CartActionsTypes.increaseCartProductQuantity,
  payload
})

export const decreaseCartProductQuantity = (payload: string) => ({
  type: CartActionsTypes.decreaseCartProductQuantity,
  payload
})

export const clearCartProducts = () => ({
  type: CartActionsTypes.clearCartProducts
})
