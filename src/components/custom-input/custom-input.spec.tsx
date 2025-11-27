import { render, screen } from '@testing-library/react'
import CustomInput from './custom-input.component'
import Colors from '../../theme/theme.colors'
import userEvent from '@testing-library/user-event'

describe('Custom Input', () => {
  it('should render with error if hasError is true', () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder='Lorem Ipsum' hasError={true} />
    )

    const input = getByPlaceholderText('Lorem Ipsum')

    expect(input).toHaveStyle({ border: `2px solid ${Colors.error}` })
  })

  it('should render without error if hasError is false', () => {
    const { getByPlaceholderText } = render(
      <CustomInput placeholder='Lorem Ipsum' hasError={false} />
    )

    const input = getByPlaceholderText('Lorem Ipsum')

    expect(input).toHaveStyle({ border: 'none' })
  })

  it('should change value when user types', async () => {
    render(<CustomInput placeholder='Lorem Ipsum' hasError={false} />)

    const user = userEvent.setup()
    const input = screen.getByPlaceholderText('Lorem Ipsum') as HTMLInputElement

    // aguarda a ação de digitar terminar
    await user.type(input, 'Dolor Sit')

    // asserção clara e robusta
    expect(input).toHaveValue('Dolor Sit')

    // alternativa (equivalente):
    // expect(screen.getByDisplayValue('Dolor Sit')).toBeInTheDocument()
  })
})
