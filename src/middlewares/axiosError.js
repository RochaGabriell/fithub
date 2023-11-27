import { useNavigate } from 'react-router-dom'

import api from '../services/api'

/**
  Este middleware intercepta os erros de autenticação e tenta renovar o token de acesso com o token de refresh. Caso o token de refresh esteja expirado, o usuário é deslogado.
*/
api.interceptors.response.use(
  resp => resp,
  async error => {
    console.log(error)
    if (error.response.status === 401) {
      const data_local = JSON.parse(localStorage.getItem('authTokens'))
      const response = await api.post('/account/token/refresh/', {
        refresh: data_local.refresh
      })

      if (response.status === 200) {
        api.defaults.headers.Authorization = `Bearer ${response.data.access}`
        localStorage.setItem('authTokens', JSON.stringify(response.data))
        return api(error.config)
      } else {
        localStorage.removeItem('authTokens')
        const navigate = useNavigate()
        navigate('/login')
        return error
      }
    }
  }
)
