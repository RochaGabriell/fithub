import { Outlet } from 'react-router-dom'

import Nav from '../../components/Nav'

import { ContainerWrapper } from './styles'

const Measurements = () => {
  const urls = [
    {
      url: '/measurements',
      name: 'Medidas'
    },
    {
      url: '/measurements/form',
      name: 'Cadastrar medidas'
    },
    {
      url: '/measurements/all',
      name: 'Todas as medidas'
    }
  ]

  return (
    <ContainerWrapper>
      <Nav urls={urls} />
      <Outlet />
    </ContainerWrapper>
  )
}

export default Measurements
