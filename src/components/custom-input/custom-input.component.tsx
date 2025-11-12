import { forwardRef, InputHTMLAttributes } from 'react'
import { CustomInputContainer } from './custom-input.styles'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ hasError, ...rest }, ref) => {
    return <CustomInputContainer $hasError={hasError} ref={ref} {...rest} />
  }
)

CustomInput.displayName = 'CustomInput'

export default CustomInput
