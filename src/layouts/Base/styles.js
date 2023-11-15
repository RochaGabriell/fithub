import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`

const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--primary);
  position: relative;
  min-height: 100vh;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '250px' : '78px')};
  width: calc(100% - ${({ isOpen }) => (isOpen ? '250px' : '78px')});
  transition: all 0.5s ease;
  z-index: 2;
`

const Container = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
`

export { Wrapper, WrapperContainer, Container }