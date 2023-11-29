import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'

import useAxios from '../../hooks/useAxios'

const Exercises = () => {
  const { response, loading, error, execute } = useAxios()

  useEffect(() => {
    if (loading) {
      toast.promise(
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve()
          }, 1000)
        }),
        {
          pending: 'Loading...',
          success: 'Success',
          error: 'Error'
        }
      )
    }
  }, [loading])

  const getExercises = async () => {
    try {
      await execute({
        url: '/exercise/exercise',
        method: 'get'
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
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
      <button onClick={getExercises}>Get Exercises</button>
      {response?.map(exercise => (
        <div key={exercise.id}>
          <h1>{exercise.name}</h1>
          <p>{exercise.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Exercises
