import Product from '../../../types/product.types'
import CartActionsTypes from './cart.action-types'

interface ToggleCartAction {
  type: typeof CartActionsTypes.toggleCart
}

export const toggleCart = (): ToggleCartAction => ({
  type: CartActionsTypes.toggleCart
})

interface AddProductToCartAction {
  type: typeof CartActionsTypes.addProductToCart
  payload: Product
}

export const addProductToCart = (payload: Product): AddProductToCartAction => ({
  type: CartActionsTypes.addProductToCart,
  payload
})

interface RemoveProductFromCartAction {
  type: typeof CartActionsTypes.removeProductFromCart
  payload: string
}

export const removeProductFromCart = (
  payload: string
): RemoveProductFromCartAction => ({
  type: CartActionsTypes.removeProductFromCart,
  payload
})

interface IncreaseCartProductQuantityAction {
  type: typeof CartActionsTypes.increaseCartProductQuantity
  payload: string
}

export const increaseCartProductQuantity = (
  payload: string
): IncreaseCartProductQuantityAction => ({
  type: CartActionsTypes.increaseCartProductQuantity,
  payload
})

interface DecreaseCartProductQuantityAction {
  type: typeof CartActionsTypes.decreaseCartProductQuantity
  payload: string
}

export const decreaseCartProductQuantity = (
  payload: string
): DecreaseCartProductQuantityAction => ({
  type: CartActionsTypes.decreaseCartProductQuantity,
  payload
})

interface ClearCartProductsAction {
  type: typeof CartActionsTypes.clearCartProducts
}

export const clearCartProducts = (): ClearCartProductsAction => ({
  type: CartActionsTypes.clearCartProducts
})

export type CartActions =
  | ToggleCartAction
  | RemoveProductFromCartAction
  | AddProductToCartAction
  | IncreaseCartProductQuantityAction
  | DecreaseCartProductQuantityAction
  | ClearCartProductsAction
