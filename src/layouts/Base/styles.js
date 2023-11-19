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
  left: ${props => (props.$isOpen ? '250px' : '78px')};
  width: calc(100% - ${props => (props.$isOpen ? '250px' : '78px')});
  transition: all 0.5s ease;
  z-index: 2;
`

const Container = styled.div`
  display: flex;
  /* max-width: 1200px; */
  height: 100%;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
    /* height: max-content; */
  }
`

export { Wrapper, WrapperContainer, Container }
