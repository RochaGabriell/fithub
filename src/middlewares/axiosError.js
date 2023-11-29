import api from '../services/api'

/**
  Este middleware intercepta os erros de autenticação e tenta renovar o token de acesso com o token de refresh. Caso o token de refresh esteja expirado, o usuário é deslogado.
*/
let refresh = false

api.interceptors.response.use(
  resp => resp,
  async error => {
    if (error.response.status === 401 && !refresh) {
      refresh = true

      const data_local = JSON.parse(localStorage.getItem('authTokens'))

      if (!data_local) {
        refresh = false
        return error
      }

      const response = await api.post('/account/token/refresh/', {
        refresh: data_local ? data_local.refresh : null
      })

      if (response.status === 200) {
        api.defaults.headers.Authorization = `Bearer ${response.data.access}`
        localStorage.setItem('authTokens', JSON.stringify(response.data))
        return api(error.config)
      }
    }

    refresh = false
    return error
  }
)
