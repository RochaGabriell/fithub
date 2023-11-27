import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const PrivateRoute = props => {
  const { user } = useContext(AuthContext)

  return !user ? <Navigate to="/login" /> : props.children
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
}

export default PrivateRoute
