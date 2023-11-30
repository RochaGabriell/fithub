import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  /* align-items: center; */
  width: 100%;
  height: 100%;
  max-width: max-content;
`

const Wrapper = styled.div`
  background-color: var(--tertiary);
  width: 430px;
  max-width: 1012px;
  margin-left: auto;
  margin-right: auto;
  display: flex;

  padding: 16px 30px;
  flex-direction: column;
  align-items: center;
  color: var(--primary);
  border-radius: 10px;
  height: fit-content;

  img {
    width: 55px;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
  }

  p,
  .link {
    font-size: 14px;
    font-weight: 400;
    margin: 8px 0;

    a {
      text-decoration: none;
      color: var(--btn-selected);
    }
  }

  .link {
    text-decoration: none;
    color: var(--btn-selected);
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 430px) {
    img {
      display: none;
    }

    h1 {
      font-size: 20px;
    }

    p,
    .link {
      font-size: 12px;
    }
  }
`

const WrapperTop = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;

  div {
    display: flex;
    flex-direction: column;
    text-align: center;

    span {
      font-size: 20px;
      font-weight: 400;
    }
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
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
`

const WrapperBirthDateSex = styled.div`
  display: flex;
  gap: 28px;
  width: 100%;

  @media screen and (max-width: 430px) {
    flex-direction: column;
    gap: 12px;
  }
`

const SelectSex = styled.select`
  width: 100%;
  height: 35px;
  border-radius: 10px;
  padding: 0 8px;
  background-color: white;
`

const BtnSubmit = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 10px;
  background-color: var(--btn-selected);
  color: white;
`

export {
  Container,
  Wrapper,
  WrapperTop,
  Form,
  WrapperInput,
  WrapperBirthDateSex,
  SelectSex,
  BtnSubmit
}
