import styled from 'styled-components'

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 6px;
  cursor: pointer;
  border-radius: 10px;
  /* width: 220px; */

  &:hover {
    background-color: var(--btn-selected);
  }
`

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const Dropdownwrapper = styled.div`
  display: ${props => (props.$state ? 'block' : 'none')};
  width: 220px;
  position: absolute;
  background-color: var(--secondary);
  padding: 8px;
  top: 66px;
  right: 1rem;
  border-radius: 0 0 10px 10px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    text-align: center;
    padding: 8px;
    border-radius: 8px;
  }

  li:hover {
    background-color: var(--btn-selected);
    color: var(--tertiary);
  }
`

export { ProfileBox, ProfileImage, Dropdownwrapper }
