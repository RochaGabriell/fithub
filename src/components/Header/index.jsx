import PropTypes from 'prop-types'

import {
  Wrapper,
  WrapperLeft,
  LogoDetailsMod,
  Icon,
  LogoName,
  TextBox
} from './styles'

import Logo from '../../assets/Logo - Light.svg'
import Dropdown from '../Dropdown'

const Header = ({ isOpen }) => {
  const options = ['Editar Pefil', 'Confingurações', 'Sair']
  const defaultText = {
    name: 'Estudante',
    urlProfile: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png'
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
          <p>Gabriel Rocha</p>
        </TextBox>
      </WrapperLeft>
      <Dropdown options={options} defaultText={defaultText} />
    </Wrapper>
  )
}

Header.propTypes = {
  isOpen: PropTypes.bool.isRequired
}

export default Header
