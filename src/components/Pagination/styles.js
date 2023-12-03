import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  button {
    background: var(--btn-selected);
    padding: 10px;
    border-radius: 5px;
    margin: 0 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: var(--tertiary);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      color: var(--tertiary);

      &:hover {
        background: #fff;
        color: #000;
      }
    }
  }

  span {
    font-size: 20px;
    font-weight: bold;
  }
`

export default Wrapper
