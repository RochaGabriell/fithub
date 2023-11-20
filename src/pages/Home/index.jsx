import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Home = () => {
  const { user } = useContext(AuthContext)

  return user ? (
    <div>
      <p>You are logged in to the homepage!</p>
    </div>
  ) : (
    <div>
      <p>You are not logged in, redirecting...</p>
    </div>
  )
}

export default Home
