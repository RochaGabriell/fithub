import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { Outlet } from 'react-router-dom'

import api from '../services/api'

const AuthContext = createContext()

const AuthProvider = () => {
  const [user, setUser] = useState(() =>
    localStorage.getItem('authTokens')
      ? jwtDecode(localStorage.getItem('authTokens'))
      : null
  )
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens'))
      : null
  )
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const loginUser = async e => {
    e.preventDefault()

    try {
      const response = await api.post('/account/token/', {
        email: e.target.email.value,
        password: e.target.password.value
      })

      if (response.data && response.status === 200) {
        api.defaults.headers.Authorization = `Bearer ${response.data.access}`
        localStorage.setItem('authTokens', JSON.stringify(response.data))
        setAuthTokens(response.data)
        setUser(jwtDecode(response.data.access))
        navigate('/')
      } else if (response.response && response.response.status === 401) {
        setError(response.response.data.detail)
      }
    } catch (error) {
      alert('Algo deu errado ao fazer login do usuário!')
    }
  }

  const logoutUser = () => {
    // try {
    //   const response = api.post('/account/logout/')
    //   if (response.status === 204) {
    //     console.log('Usuário deslogado com sucesso!')
    //   }
    // } catch (error) {
    //   console.log('Algo deu errado ao fazer logout do usuário!')
    // }
    api.defaults.headers.Authorization = null
    localStorage.removeItem('authTokens')
    setAuthTokens(null)
    setUser(null)
    navigate('/login')
  }

  const contextData = {
    user: user,
    authTokens: authTokens,
    objError: {
      error: error,
      setError: setError
    },
    loginUser: loginUser,
    logoutUser: logoutUser
  }

  return (
    <AuthContext.Provider value={contextData}>
      <Outlet />
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
