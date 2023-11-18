import styled from 'styled-components'

import { LogoDetails, Icon, LogoName } from '../Sidebar/styles'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3.6rem;
  padding: 0.5rem 1rem;
  background-color: var(--secondary);
  border-bottom: 1px solid var(--quaternary);

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`

const WrapperLeft = styled.div`
  display: flex;
  gap: 20px;
`

const LogoDetailsMod = styled(LogoDetails)`
  display: ${props => (props.$isOpen ? 'flex' : 'none')};
  height: 100%;
  gap: 10px;

  img {
    height: 100%;
  }

  div {
    font-size: 1.3rem;
  }
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 1.3rem;
  }

  p {
    font-size: 0.8rem;
    color: var(--tertiary);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export { Wrapper, WrapperLeft, LogoDetailsMod, Icon, LogoName, TextBox }
