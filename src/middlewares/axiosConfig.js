import api from '../services/api'

/**
  Este middleware intercepta todas as requisições e adiciona o token de acesso no header Authorization.
*/
api.interceptors.request.use(async config => {
  const data_local = JSON.parse(localStorage.getItem('authTokens'))
  if (data_local) {
    config.headers.Authorization = `Bearer ${data_local.access}`
  }
  return config
})
