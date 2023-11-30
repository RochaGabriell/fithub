import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background: var(--secondary);
  width: ${props => (props.$isopen ? '250px' : '78px')};
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;
  border-right: 1px solid var(--quaternary);

  @media screen and (max-width: 420px) {
    width: ${props => (props.$isopen ? '100vw' : '78px')};
  }
`

const LogoDetails = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
  gap: 10px;

  i {
    color: #fff;
    height: 60px;
    min-width: 50px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
  }
`

const Icon = styled.img`
  opacity: ${props => (props.$isopen ? '1' : '0')};
  transition: all 0.5s ease;
`

const LogoName = styled.div`
  color: var(--tertiary);
  font-size: 20px;
  font-weight: 600;
  opacity: ${props => (props.$isopen ? '1' : '0')};
  transition: all 0.5s ease;
`

const HamBurgerMenu = styled.i`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 22px;
  transition: all 0.4s ease;
  font-size: 23px;
  text-align: ${props => (props.$isopen ? 'right' : 'center')};
  cursor: pointer;
  transition: all 0.5s ease;
`

const WrapperNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 60px);
`

const NavList = styled.ul`
  margin-top: 20px;
  /* height: 100%; */

  li {
    position: relative;
    margin: 8px 0;
    list-style: none;
    height: 50px;

    a {
      display: flex;
      height: 100%;
      width: 100%;
      border-radius: 12px;
      align-items: center;
      text-decoration: none;
      transition: all 0.4s ease;
      background: var(--btn-selected);

      &:hover {
        background: var(--primary);
      }

      img {
        line-height: 50px;
        font-size: 18px;
        border-radius: 12px;
        padding: 15px;
      }

      &:hover span {
        transition: all 0.5s ease;
        color: var(--quaternary);
      }
    }

    &:hover > span {
      opacity: 1;
      pointer-events: auto;
      transition: all 0.4s ease;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`

const ToolTip = styled.span`
  position: absolute;
  top: 10px;
  left: calc(100% + 15px);
  z-index: 3;
  color: var(--primary);
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: 0s;
  display: ${props => (props.$isopen ? 'none' : 'block')};

  @media screen and (max-width: 420px) {
    display: none;
  }
`

const LinkName = styled.span`
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: ${props => (props.$isopen ? '1' : '0')};
  pointer-events: ${props => (props.$isopen ? 'auto' : 'none')};
  transition: 0.4s;
`

const Profile = styled.li`
  position: fixed;
  height: ${props => (props.$isopen ? '60px' : '50px')} !important;
  /* width: ${({ isopen }) => (isopen ? '250px' : '78px')}; */
  left: 0;
  bottom: -8px;
  padding: 10px 14px;
  background: var(--primary);
  transition: all 0.5s ease;
  overflow: hidden;
  border-radius: 12px;
`

const ProfileDetails = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  img {
    height: 40px;
    width: 40px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 10px;
  }

  .name,
  .job {
    font-size: 15px;
    font-weight: 400;
    color: #fff;
    white-space: nowrap;
  }

  .job {
    font-size: 12px;
  }
`

const Logout = styled.i`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: ${props => (props.$isopen ? 'none' : 'var(--btn-red)')};
  width: ${props => (props.$isopen ? '50px' : '100%')};
  /* height: 60px; */
  line-height: 60px;
  transition: all 0.5s ease;
  text-align: center;
  cursor: pointer;
`

export {
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
}
