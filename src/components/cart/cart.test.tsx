import userEvent from '@testing-library/user-event'
import { renderWithRedux } from '../../helpers/test.helpers'
import Cart from './cart.component'

describe('Cart', () => {
  it('should show correct cart products', () => {
    const { getByText } = renderWithRedux(<Cart />, {
      preloadedState: {
        cartReducer: {
          products: [
            {
              id: '1',
              imageUrl: 'image_url',
              name: 'Boné',
              price: 100,
              quantity: 2
            }
          ]
        }
      } as any
    })

    getByText(/boné/i)
    getByText('R$100')
    getByText('2')
    getByText('Total: R$ 200')
    getByText(/ir para o checkout/i)
  })

  it('should not show checkout button and should show an empty message if cart is empty', () => {
    const { getByText, queryByText } = renderWithRedux(<Cart />, {
      preloadedState: {
        cartReducer: {
          products: []
        }
      } as any
    })

    getByText(/seu carrinho está vazio!/i)
    expect(queryByText(/ir para o checkout/i)).toBeNull()
  })

  it('should increase product quantity on increase click', async () => {
    const { getByLabelText, getByText } = renderWithRedux(<Cart />, {
      preloadedState: {
        cartReducer: {
          products: [
            {
              id: '1',
              imageUrl: 'image_url',
              name: 'Boné',
              price: 100,
              quantity: 4
            }
          ]
        }
      } as any
    })

    const increaseButton = getByLabelText(/increase quantity of boné/i)

    await userEvent.click(increaseButton)

    getByText('5')
    getByText('Total: R$ 500')
  })

  it('should decrease product quantity on decrease click', async () => {
    const { getByLabelText, getByText } = renderWithRedux(<Cart />, {
      preloadedState: {
        cartReducer: {
          products: [
            {
              id: '1',
              imageUrl: 'image_url',
              name: 'Boné',
              price: 100,
              quantity: 4
            }
          ]
        }
      } as any
    })

    const decreaseButton = getByLabelText(/decrease quantity of boné/i)

    await userEvent.click(decreaseButton)

    getByText('3')
    getByText('Total: R$ 300')
  })

  it('should remove product on remove click', async () => {
    const { getByLabelText, queryByText, getByText } = renderWithRedux(
      <Cart />,
      {
        preloadedState: {
          cartReducer: {
            products: [
              {
                id: '1',
                imageUrl: 'image_url',
                name: 'Boné',
                price: 100,
                quantity: 4
              }
            ]
          }
        } as any
      }
    )

    const removeButton = getByLabelText(/remove boné/i)

    await userEvent.click(removeButton)
    getByText(/seu carrinho está vazio/i)

    expect(queryByText(/boné/i)).toBeNull()
  })
})
