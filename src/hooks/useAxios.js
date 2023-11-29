import { useState, useEffect } from 'react'

import api from '../services/api'
import '../middlewares/axiosConfig'

function useAxios(initialAxiosParams = null) {
  const [axiosParams, setAxiosParams] = useState(initialAxiosParams)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async params => {
    try {
      setLoading(true)
      const res = await api.request(params)
      setResponse(res.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (axiosParams) {
      fetchData(axiosParams)
    }
  }, [axiosParams])

  const execute = newAxiosParams => {
    setAxiosParams(newAxiosParams)
  }

  return { response, error, loading, execute }
}

export default useAxios
