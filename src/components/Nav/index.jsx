import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { HeaderWrapper } from './styles'

const Nav = ({ urls }) => {
  return (
    <HeaderWrapper>
      <ul>
        {urls.map((url, index) => (
          <li key={index}>
            <Link to={url.url}>{url.name}</Link>
          </li>
        ))}
      </ul>
    </HeaderWrapper>
  )
}

Nav.propTypes = {
  urls: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string
    })
  )
}

export default Nav
