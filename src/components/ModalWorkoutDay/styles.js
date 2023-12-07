import styled from 'styled-components'

const ContainerModal = styled.div`
  display: ${({ $openModal }) => ($openModal ? 'block' : 'none')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  border-radius: 5px;
  padding: 20px;
  z-index: 1000;
  overflow-y: scroll;
  background-color: var(--secondary);
  box-shadow: 0 0 10px var(--tertiary);

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--tertiary);
    border-radius: 4px;
  }

  h1 {
    font-size: 1.5rem;
    color: var(--tertiary);
    margin-bottom: 10px;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 10px;
  }
`

const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h1 {
    font-size: 2rem;
    color: var(--tertiary);
    margin: 0;
    width: 100%;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`

const WrapperDescriptionModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 5px;
    overflow: hidden;

    thead {
      background-color: var(--btn-selected);
      color: var(--secondary);
      font-weight: bold;
      font-size: 1.2rem;
      height: 2rem;
    }

    tbody {
      background-color: var(--secondary);
      color: var(--tertiary);
      font-weight: bold;
      font-size: 1rem;
      height: 2rem;

      tr {
        transition: 0.3s;
        text-align: center;

        &:hover {
          background-color: var(--btn-selected);
          color: var(--secondary);
          cursor: pointer;
        }
      }
    }

    th {
      padding: 0 0.5rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`

const ButtonCloseModal = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 35px;
  background-color: var(--btn-selected);
  padding: 10px;
  color: var(--secondary);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--btn-red);
    color: var(--tertiary);
  }
`

export {
  ContainerModal,
  HeaderModal,
  WrapperDescriptionModal,
  ButtonCloseModal
}
