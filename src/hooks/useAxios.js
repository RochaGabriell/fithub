import { useState, useEffect } from 'react'

import api from '../services/api'

function useAxios(url){
  const [data, setData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!url) {
      setData({})
      setLoading(false)
      return
    }

    const fetchData = async () => {
      try {
        const response = await api(url)
        setData(response.data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, error, loading }
}

export default useAxios