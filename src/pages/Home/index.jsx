import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Home = () => {
  const { authTokens, logoutUser } = useContext(AuthContext)
  const [profile, setProfile] = useState([])

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {
    const response = await fetch(
      'http://127.0.0.1:8000/api/v1/account/profile/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + String(authTokens.access)
        }
      }
    )

    const data = await response.json()

    if (response.status === 200) {
      setProfile(data)
    } else if (response.statusText === 'Unauthorized') {
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
