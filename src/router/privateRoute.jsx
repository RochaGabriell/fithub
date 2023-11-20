import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useContext(AuthContext)

  return !user ? <Navigate to="/login" /> : children
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  rest: PropTypes.any
}

export default PrivateRoute
