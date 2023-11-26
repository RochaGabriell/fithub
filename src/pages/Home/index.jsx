import { useState, useEffect } from 'react'
import { useContext } from 'react'

import { AuthContext } from '../../context/AuthContext'
import api from '../../services/api'

const Home = () => {
  const [profile, setProfile] = useState([])
  const { logoutUser } = useContext(AuthContext)

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {
    const { data, status, statusText } = await api.get('/account/profile/')

    if (status === 200) {
      setProfile(data)
    } else if (statusText === 'Unauthorized') {
      logoutUser()
    }
  }

  return (
    <div>
      <p>You are logged in to the homepage!</p>
      <p>Name: {profile.name}</p>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
      <p>Idade: {profile.show_age}</p>
      <p>Idade: {profile.birth_date}</p>
      <p>Idade: {profile.sex}</p>
    </div>
  )
}

export default Home
