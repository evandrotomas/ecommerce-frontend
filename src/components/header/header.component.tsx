import { signOut } from 'firebase/auth'
import { BsCart3 } from 'react-icons/bs'
import { UserContext } from '../../contexts/user.context'
import { useNavigate } from 'react-router-dom'

// Utilities
import { auth } from '../../config/firebase.config'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

// Styles
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './header.styles'

const Header = () => {
  const navigate = useNavigate()

  const { isAuthenticated } = useContext(UserContext)
  const { toggleCart, productsCount } = useContext(CartContext)

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleExploreClick = () => {
    navigate('/explore')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpClick = () => {
    navigate('/sign-up')
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleLogoClick}>CLUB CLOTHING</HeaderTitle>

      <HeaderItems>
        <HeaderItem onClick={handleExploreClick}>Explorar</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSignUpClick}>Criar conta</HeaderItem>
          </>
        )}

        {isAuthenticated && (
          <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
        )}
        <HeaderItem onClick={toggleCart}>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>{productsCount}</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
