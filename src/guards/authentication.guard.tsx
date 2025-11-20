import { FunctionComponent, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Utilities

// Components
import Header from '../components/header/header.component'
import Loading from '../components/loading/loading.component'

interface AuthenticationProps {
  children: ReactNode
}

const AuthenticationGuard: FunctionComponent<AuthenticationProps> = ({
  children
}) => {
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 4000)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <Header />

        <Loading message='Você precisa está logado para acessar esta página. Você será redirecionado para a página de login em instantes...' />
      </>
    )
  }

  return <>{children}</>
}

export default AuthenticationGuard
