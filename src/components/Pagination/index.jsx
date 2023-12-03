import PropTypes from 'prop-types'
import Wrapper from './styles'

const Pagination = ({ page, handlePage, response }) => {
  return (
    <Wrapper>
      {(page > 1 && (
        <button onClick={() => handlePage(page - 1)}>Voltar</button>
      )) || <button disabled>Voltar</button>}
      <span>- {page} -</span>
      {(response?.data?.next && (
        <button onClick={() => handlePage(page + 1)}>Avançar</button>
      )) || <button disabled>Avançar</button>}
    </Wrapper>
  )
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  handlePage: PropTypes.func.isRequired,
  response: PropTypes.shape({
    data: PropTypes.shape({
      next: PropTypes.string
    })
  })
}

export default Pagination
