import PropTypes from 'prop-types'
import { useState } from 'react'

import { ProfileBox, ProfileImage, Dropdownwrapper } from './styles'
import { Link } from 'react-router-dom'

const Dropdown = ({ options, defaultText }) => {
  const [state, setState] = useState(false)

  const changeState = optionName => {
    setState(optionName)
  }

  return (
    <>
      <ProfileBox onClick={() => changeState(!state)}>
        <ProfileImage src={defaultText.urlProfile} alt="profile" />
      </ProfileBox>

      <Dropdownwrapper $state={state} onMouseLeave={() => changeState(!state)}>
        <ul>
          {options.map((option, index) =>
            option.url === undefined ? (
              <li onClick={option.onClick} key={index}>
                {option.name}
              </li>
            ) : (
              <Link to={option.url} key={index}>
                <li>{option.name}</li>
              </Link>
            )
          )}
        </ul>
      </Dropdownwrapper>
    </>
  )
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  defaultText: PropTypes.object.isRequired
}

export default Dropdown
