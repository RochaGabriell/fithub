import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react'

import useAxios from '../../hooks/useAxios'
import Pagination from '../../components/Pagination'

const Exercises = () => {
  const { response, error, execute } = useAxios()
  const [page, setPage] = useState(1)

  const handlePage = page => {
    setPage(page)
    execute({
      url: `/exercise/exercise?page=${page}`,
      method: 'get'
    })
  }

  useEffect(() => {
    if (error || response?.code !== 200) {
      toast.error(error)
      toast.error(
        response?.message === 'Request failed with status code 404'
          ? 'Não foi encontrado nenhum exercício'
          : response?.message
      )
    }
  }, [error, response?.code, response?.message])

  useEffect(() => {
    execute({
      url: `/exercise/exercise?page=${page}`,
      method: 'get'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(response)

  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <h1>Exercises</h1>
        {response?.data?.results?.map(exercise => (
          <div key={exercise.id}>
            <p>{exercise.name}</p>
          </div>
        ))}
      </div>
      <Pagination page={page} handlePage={handlePage} response={response} />
    </>
  )
}

export default Exercises
