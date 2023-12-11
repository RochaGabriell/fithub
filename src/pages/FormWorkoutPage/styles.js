import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 100%;
  height: 100%;
`

const Header = styled.header`
  background-color: var(--secondary);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 3rem;
  margin-bottom: 0.7rem;
  border-radius: 5px;
  border: 1px solid var(--tertiary);

  h1 {
    font-size: 1.5rem;
    color: var(--tertiary);
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: min-content;
    padding: 10px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  height: 100%;
`

const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 390px;
  gap: 5px;

  input {
    width: 100%;
    max-width: 390px;
    height: 35px;
    border-radius: 10px;
    padding: 0 8px;
  }

  textarea {
    width: 100%;
    max-width: 390px;
    height: 100px;

    border-radius: 10px;
    padding: 8px;
    resize: none;
  }
`

const WrapperInputCheck = styled(WrapperInput)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 5px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    input {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
`

const Button = styled(Link)`
  background-color: var(--btn-selected);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: var(--tertiary);
  font-weight: bold;
  transition: 0.3s;
  text-decoration: none;

  &.btn-danger {
    background-color: var(--btn-red);
  }

  &:hover {
    background-color: var(--tertiary);
    color: var(--primary);
  }
`

const BtnSubmit = styled.button`
  width: 100%;
  max-width: 390px;
  height: 35px;
  border-radius: 10px;
  background-color: var(--btn-selected);
  color: white;
`

const Select = styled.select`
  height: 2rem;
  border-radius: 5px;
  border: 1px solid var(--tertiary);
  padding: 0 0.5rem;
`

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  height: 100%;
  min-height: 490px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const WrapperList = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const MainList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  max-height: 370px;
  overflow-y: scroll;
`

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 0 1rem;

    h2 {
      font-size: 1rem;
    }

    @media screen and (max-width: 768px) {
      gap: 5px;
      padding: 0;
    }
  }
`

export {
  Container,
  Header,
  Form,
  WrapperInput,
  WrapperInputCheck,
  Button,
  BtnSubmit,
  Select,
  Main,
  WrapperForm,
  WrapperList,
  MainList,
  ItemList
}
