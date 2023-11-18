import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import {
  Wrapper,
  LogoDetails,
  Icon,
  LogoName,
  HamBurgerMenu,
  WrapperNav,
  NavList,
  ToolTip,
  LinkName,
  Profile,
  ProfileDetails,
  Logout
} from './styles'

import Logo from '../../assets/Logo - Light.svg'
import Calculator from '../../assets/NavBar/Calculator.svg'
import HomeIcon from '../../assets/NavBar/Home.svg'
import Login from '../../assets/NavBar/Login.svg'
import Muscle from '../../assets/NavBar/Muscle.svg'
import Register from '../../assets/NavBar/Register.svg'
import Dumbbells from '../../assets/NavBar/Dumbbells.svg'
import About from '../../assets/NavBar/About.svg'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    {
      name: 'Home',
      icon: HomeIcon,
      link: '/'
    },
    {
      name: 'Treinos',
      icon: Dumbbells,
      link: '/workouts'
    },
    {
      name: 'Exercícios',
      icon: Muscle,
      link: '/exercises'
    },
    {
      name: 'Ferramentas',
      icon: Calculator,
      link: '/tools'
    },
    {
      name: 'Sobre',
      icon: About,
      link: '/about'
    }
  ]

  const navItemsAuth = [
    {
      name: 'Login',
      icon: Login,
      link: '/login'
    },
    {
      name: 'Cadastro',
      icon: Register,
      link: '/register'
    }
  ]

  return (
    <Wrapper $isOpen={isOpen}>
      <LogoDetails>
        <Icon src={Logo} alt="logo" $isOpen={isOpen} />
        <LogoName $isOpen={isOpen}>FitHub</LogoName>
        <HamBurgerMenu
          className="bx bx-menu"
          onClick={toggleSidebar}
          $isOpen={isOpen}
        />
      </LogoDetails>
      <WrapperNav>
        <NavList>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>
                <img src={item.icon} alt="home" />
                <LinkName $isOpen={isOpen}>{item.name}</LinkName>
              </Link>
              <ToolTip $isOpen={isOpen}>{item.name}</ToolTip>
            </li>
          ))}
        </NavList>
        <NavList>
          {navItemsAuth.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>
                <img src={item.icon} alt="home" />
                <LinkName $isOpen={isOpen}>{item.name}</LinkName>
              </Link>
              <ToolTip $isOpen={isOpen}>{item.name}</ToolTip>
            </li>
          ))}
          {/* <Profile $isOpen={isOpen}>
            <ProfileDetails>
              <img
                src="https://avatars.githubusercontent.com/u/53454609?v=4"
                alt="profileImg"
              />
              <div className="name_job">
                <div className="name">Gabriel Rocha</div>
                <div className="ruler">Web designer</div>
              </div>
            </ProfileDetails>
            <Logout className="bx bx-log-out" $isOpen={isOpen} />
          </Profile> */}
        </NavList>
      </WrapperNav>
    </Wrapper>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}

export default Sidebar