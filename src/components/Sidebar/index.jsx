import PropTypes from 'prop-types'
import { useContext } from 'react'
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
// import Calculator from '../../assets/NavBar/Calculator.svg'
// import HomeIcon from '../../assets/NavBar/Home.svg'
import Login from '../../assets/NavBar/Login.svg'
import Muscle from '../../assets/NavBar/Muscle.svg'
import Register from '../../assets/NavBar/Register.svg'
import Dumbbells from '../../assets/NavBar/Dumbbells.svg'
import About from '../../assets/NavBar/About.svg'
import { AuthContext } from '../../context/AuthContext'

const Sidebar = ({ isopen, toggleSidebar }) => {
  const { user, logoutUser } = useContext(AuthContext)
  const navItems = [
    // {
    //   name: 'Home',
    //   icon: HomeIcon,
    //   link: '/'
    // },
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
    // {
    //   name: 'Ferramentas',
    //   icon: Calculator,
    //   link: '/tools'
    // },
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
    <Wrapper $isopen={isopen}>
      <LogoDetails>
        <Icon src={Logo} alt="logo" $isopen={isopen} />
        <LogoName $isopen={isopen}>FitHub</LogoName>
        <HamBurgerMenu
          className="bx bx-menu"
          onClick={toggleSidebar}
          $isopen={isopen}
        />
      </LogoDetails>
      <WrapperNav>
        <NavList>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>
                <img src={item.icon} alt="home" />
                <LinkName $isopen={isopen}>{item.name}</LinkName>
              </Link>
              <ToolTip $isopen={isopen}>{item.name}</ToolTip>
            </li>
          ))}
        </NavList>
        <NavList>
          {!user ? (
            navItemsAuth.map((item, index) => (
              <li key={index}>
                <Link to={item.link}>
                  <img src={item.icon} alt="home" />
                  <LinkName $isopen={isopen}>{item.name}</LinkName>
                </Link>
                <ToolTip $isopen={isopen}>{item.name}</ToolTip>
              </li>
            ))
          ) : (
            <Profile $isopen={isopen}>
              <ProfileDetails>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                  alt="profileImg"
                />
                <div className="name_job">
                  <div className="name">{user ? user.username : ''}</div>
                  {/* <div className="ruler">Web designer</div> */}
                </div>
              </ProfileDetails>
              <Logout
                className="bx bx-log-out"
                $isopen={isopen}
                onClick={logoutUser}
              />
            </Profile>
          )}
        </NavList>
      </WrapperNav>
    </Wrapper>
  )
}

Sidebar.propTypes = {
  isopen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}

export default Sidebar
