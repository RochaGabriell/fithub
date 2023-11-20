import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { Outlet } from 'react-router-dom'

const AuthContext = createContext()

const AuthProvider = () => {
  let [user, setUser] = useState(() =>
    localStorage.getItem('authTokens')
      ? jwtDecode(localStorage.getItem('authTokens'))
      : null
  )
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens'))
      : null
  )
  let [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const loginUser = async e => {
    e.preventDefault()
    const response = await fetch(
      'http://127.0.0.1:8000/api/v1/account/token/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value
        })
      }
    )

    const data = await response.json()

    if (data) {
      localStorage.setItem('authTokens', JSON.stringify(data))
      setAuthTokens(data)
      setUser(jwtDecode(data.access))
      navigate('/')
    } else {
      alert('Something went wrong while loggin in the user!')
    }
  }

  const logoutUser = e => {
    e.preventDefault()
    localStorage.removeItem('authTokens')
    setAuthTokens(null)
    setUser(null)
    navigate('/login')
  }

  const updateToken = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ refresh: authTokens?.refresh })
    })

    const data = await response.json()
    if (response.status === 200) {
      setAuthTokens(data)
      setUser(jwtDecode(data.access))
      localStorage.setItem('authTokens', JSON.stringify(data))
    } else {
      logoutUser()
    }

    if (loading) {
      setLoading(false)
    }
  }

  useEffect(() => {
    const REFRESH_INTERVAL = 1000 * 60 * 4 // 4 minutes
    const interval = setInterval(() => {
      if (authTokens) {
        updateToken()
      }
    }, REFRESH_INTERVAL)
    return () => clearInterval(interval)
  }, [authTokens, loading])

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
