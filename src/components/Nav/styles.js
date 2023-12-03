import styled from 'styled-components'

const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-left: 25px;
  text-align: center;

  ul {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 20px;

    li {
      list-style: none;
      padding: 10px 0;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: var(--btn-selected);
      }

      a {
        text-decoration: none;
        color: var(--white);
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0;

    ul {
      gap: 0;
      padding: 0 10px;

      li {
        padding: 10px;
      }
    }
  }
`

export { HeaderWrapper }
