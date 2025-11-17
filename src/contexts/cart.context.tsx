/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, FunctionComponent, useState } from 'react'
import CartProduct from '../types/cart.typs'

interface ICartContext {
  isVisible: boolean
  products: CartProduct[]
  toggleCart: () => void
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {}
})

const CartContextProvider: FunctionComponent<{ children: React.ReactNode }> = ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products] = useState<CartProduct[]>([])

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <CartContext.Provider value={{ isVisible, products, toggleCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
