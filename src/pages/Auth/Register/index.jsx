import { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { AuthContext } from '../../../context/AuthContext'
import Logo from '../../../assets/Logo - Dark.svg'
import useAxios from '../../../hooks/useAxios'

import {
  Container,
  Wrapper,
  WrapperTop,
  Form,
  WrapperInput,
  WrapperBirthDateSex,
  SelectSex,
  BtnSubmit
} from '../styles'

const Register = () => {
  const { authTokens } = useContext(AuthContext)
  const { response, error, execute } = useAxios(null)
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    username: '',
    email: '',
    birth_date: '',
    sex: '',
    password: ''
  })

  useEffect(() => {
    if (authTokens) {
      navigate('/')
    }

    if (submitted) {
      setSubmitted(false)
      execute({
        url: 'account/users',
        method: 'POST',
        data
      })
    }

    if (error) {
      toast.error(
        'Ocorreu um erro ao processar a solicitação. Tente novamente.'
      )
    }
  }, [authTokens, submitted, error])

  useEffect(() => {
    if (response?.response?.status === 400) {
      const { data } = response.response
      if (data) {
        Object.entries(data).forEach(([key, value]) => {
          const errorMessage = value[0] || 'Erro desconhecido'
          toast.error(`${key}: ${errorMessage}`)
        })
      }
    }

    if (response?.status === 201) {
      toast.success('Usuário cadastrado com sucesso!')
      toast.info('Redirecionando para a página de login...')
      setData({
        name: '',
        username: '',
        email: '',
        birth_date: '',
        sex: '',
        password: ''
      })

      setTimeout(() => {
        navigate('/login')
      }, 2000)
    }
  }, [response])

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleInputChange = e => {
    const { name, value } = e.target

    const formattedValue =
      name === 'birth_date'
        ? new Date(value).toISOString().split('T')[0]
        : value

    setData(prevData => ({
      ...prevData,
      [name]: formattedValue
    }))
  }

  return (
    <Container>
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
              value={data.name}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="username">Nome de Usuário</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Nome de Usuário"
              value={data.username}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="email">Endereço de Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Endereço de Email"
              value={data.email}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperBirthDateSex>
            <WrapperInput>
              <label htmlFor="birth_date">Data de Nascimento</label>
              <input
                type="date"
                name="birth_date"
                id="birth_date"
                placeholder="Data de Nascimento"
                value={data.birth_date}
                onChange={handleInputChange}
                required
              />
            </WrapperInput>
            <WrapperInput>
              <label htmlFor="sex">Sexo</label>
              <SelectSex
                name="sex"
                id="sex"
                value={data.sex}
                onChange={handleInputChange}
                required
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
              autoComplete="on"
              value={data.password}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <Link to="/login" className="link">
            Esqueceu sua senha?
          </Link>
          <BtnSubmit type="submit">Criar Conta</BtnSubmit>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
