import { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../../assets/Logo - Dark.svg'
import { Wrapper, WrapperTop, Form, WrapperInput, BtnSubmit } from '../styles'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Submit')
  }

  return (
    <Wrapper>
      <WrapperTop style={{ flexDirection: 'column' }}>
        <img src={Logo} alt="Logo" />
        <div style={{ textAlign: 'center' }}>
          <h1>Faça seu login</h1>
          <p>
            Ou <Link to="/register">crie sua conta</Link>
          </p>
        </div>
      </WrapperTop>
      <Form onSubmit={handleSubmit}>
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

export default Login
