import { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../../assets/Logo - Dark.svg'
import {
  Wrapper,
  WrapperTop,
  Form,
  WrapperInput,
  WrapperBirthDateSex,
  SelectSex,
  BtnSubmit
} from '../styles'

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
