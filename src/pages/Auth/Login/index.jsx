import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { AuthContext } from '../../../context/AuthContext'

import {
  Container,
  Wrapper,
  WrapperTop,
  Form,
  WrapperInput,
  BtnSubmit
} from '../styles'
import Logo from '../../../assets/Logo - Dark.svg'

const Login = () => {
  const { authTokens, loginUser, objError } = useContext(AuthContext)
  const { error, setError } = objError
  const navigate = useNavigate()

  useEffect(() => {
    if (error) {
      toast.error(error)
      setError(null)
      document.getElementById('password').value = ''
    }
  }, [error, setError])

  useEffect(() => {
    if (authTokens) {
      navigate('/')
    }
  })

  return (
    <Container>
      <Wrapper>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
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
    </Container>
  )
}

export default Login
