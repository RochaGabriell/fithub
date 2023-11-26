import { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'

import { Wrapper, WrapperTop, Form, WrapperInput, BtnSubmit } from '../styles'
import { AuthContext } from '../../../context/AuthContext'
import Logo from '../../../assets/Logo - Dark.svg'

const Login = () => {
  const { authTokens, loginUser } = useContext(AuthContext)

  if (authTokens) {
    return <Navigate to="/" />
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
      <Form onSubmit={loginUser}>
        <WrapperInput>
          <label htmlFor="email">Endereço de Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Endereço de Email"
            required
          />
        </WrapperInput>
        <WrapperInput>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            autoComplete="on"
            required
          />
        </WrapperInput>
        <Link to="/login" className="link">
          Esqueceu sua senha?
        </Link>
        <BtnSubmit type="submit">Entrar</BtnSubmit>
      </Form>
    </Wrapper>
  )
}

export default Login
