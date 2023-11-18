import styled from 'styled-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../../assets/Logo - Dark.svg'

const Wrapper = styled.div`
  background-color: var(--tertiary);
  width: 430px;
  max-width: 1012px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 16px 30px;
  flex-direction: column;
  align-items: center;
  color: var(--primary);
  border-radius: 10px;

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

const Register = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [sex, setSex] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Submit')
  }

  return (
    <Wrapper>
      <WrapperTop>
        <img src={Logo} alt="Logo" />
        <div>
          <h1>Crie sua conta</h1>
          <p>
            Ou <Link to="/login">entre na sua conta</Link>
          </p>
        </div>
      </WrapperTop>
      <Form onSubmit={handleSubmit}>
        <WrapperInput>
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome Completo"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </WrapperInput>
        <WrapperInput>
          <label htmlFor="username">Nome de Usuário</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Nome de Usuário"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </WrapperInput>
        <WrapperInput>
          <label htmlFor="email">Endereço de Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Endereço de Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </WrapperInput>
        <WrapperBirthDateSex>
          <WrapperInput>
            <label htmlFor="birthDate">Data de Nascimento</label>
            <input
              type="date"
              name="birthDate"
              id="birthDate"
              placeholder="Data de Nascimento"
              value={birthDate}
              onChange={e => setBirthDate(e.target.value)}
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="sex">Sexo</label>
            <SelectSex
              name="sex"
              id="sex"
              value={sex}
              onChange={e => setSex(e.target.value)}
            >
              <option value="">Sexo</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </SelectSex>
          </WrapperInput>
        </WrapperBirthDateSex>
        <WrapperInput>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </WrapperInput>
        <Link to="/login" className="link">
          Esqueceu sua senha?
        </Link>
        <BtnSubmit type="submit">Criar Conta</BtnSubmit>
      </Form>
    </Wrapper>
  )
}

export default Register
