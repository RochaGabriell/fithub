import PropTypes from 'prop-types'
import { useContext } from 'react'

import {
  Wrapper,
  WrapperLeft,
  LogoDetailsMod,
  Icon,
  LogoName,
  TextBox
} from './styles'

import { AuthContext } from '../../context/AuthContext'
import Logo from '../../assets/Logo - Light.svg'
import Dropdown from '../Dropdown'

const Header = ({ isOpen }) => {
  const { user, logoutUser } = useContext(AuthContext)
  const optionsLogged = [
    { name: 'Perfil', url: '/profile' },
    { name: 'Sair', onClick: logoutUser }
  ]
  const optionsNotLogged = [
    { name: 'Entrar', url: '/login' },
    { name: 'Cadastrar', url: '/register' }
  ]
  const defaultText = {
    name: 'Estudante',
    urlProfile: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png'
  }

  const isLogged = user => {
    if (user) {
      return optionsLogged
    } else {
      return optionsNotLogged
    }
  }

  return (
    <Wrapper>
      <WrapperLeft>
        <LogoDetailsMod $isOpen={!isOpen}>
          <Icon src={Logo} alt="logo" $isOpen={!isOpen} />
          <LogoName $isOpen={!isOpen}>FitHub</LogoName>
        </LogoDetailsMod>
        <TextBox>
          <h1>Bem-vindo</h1>
          <p>{user ? user.username : ''}</p>
        </TextBox>
      </WrapperLeft>
      <Dropdown options={isLogged(user)} defaultText={defaultText} />
    </Wrapper>
  )
}

Header.propTypes = {
  isOpen: PropTypes.bool.isRequired
}

export default Header
