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
  const navigate = useNavigate()

  const loginUser = async e => {
    e.preventDefault()

    const response = await api.post('/account/token/', {
      email: e.target.email.value,
      password: e.target.password.value
    })

    api.defaults.headers.Authorization = `Bearer ${response.data.access}`

    if (response.data) {
      localStorage.setItem('authTokens', JSON.stringify(response.data))
      setAuthTokens(response.data)
      setUser(jwtDecode(response.data.access))
      navigate('/')
    } else {
      alert('Algo deu errado ao fazer login do usuário!')
    }
  }

  const logoutUser = () => {
    api.defaults.headers.Authorization = null
    localStorage.removeItem('authTokens')
    setAuthTokens(null)
    setUser(null)
    navigate('/login')
  }

  const contextData = {
    user: user,
    authTokens: authTokens,
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
