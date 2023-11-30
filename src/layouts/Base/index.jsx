import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

import { Wrapper, WrapperContainer, Container } from './styles'
import FlowiseChat from '../../components/FlowiseChat'

const Base = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <Wrapper>
      <Sidebar isopen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <WrapperContainer $isopen={isSidebarOpen}>
        <Header isopen={isSidebarOpen} />
        <Container>
          <Outlet />
        </Container>
      </WrapperContainer>
      <FlowiseChat isopen={isSidebarOpen} />
    </Wrapper>
  )
}

export default Base
