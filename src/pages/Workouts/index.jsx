import { ToastContainer, toast } from 'react-toastify'
import { useEffect, useState } from 'react'

import useAxios from '../../hooks/useAxios'
import Pagination from '../../components/Pagination'
import ModalExercise from '../../components/ModalExercise'
import ModalWorkoutDay from '../../components/ModalWorkoutDay'

import {
  Container,
  Header,
  Main,
  SheetWorkout,
  Button,
  ButtonSearch,
  FormGroup,
  Select
} from './styles'
import ModalDayExercise from '../../components/ModalDayExercise'

const Workouts = () => {
  const { response, error, loading, execute } = useAxios(null)
  const { response: responseWorkoutDay, execute: executeWorkoutDay } =
    useAxios(null)
  const { response: responseDayExercise, execute: executeDayExercise } =
    useAxios(null)
  const { response: responseDifficulty, execute: executeDifficulty } =
    useAxios(null)
  const [page, setPage] = useState(1)
  const [workoutDays, setWorkoutDays] = useState([])
  const [dayExercises, setDayExercises] = useState([])
  const [visibility, setVisibility] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const difficultyObj = {
    1: 'Princiante',
    3: 'Intermediário',
    2: 'Especialista'
  }

  const { response: responseExerciseId, execute: executeExerciseId } =
    useAxios(null)
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const [openModalWorkoutDay, setOpenModalWorkoutDay] = useState(false)
  const handleOpenModalWorkoutDay = () => setOpenModalWorkoutDay(true)
  const handleCloseModalWorkoutDay = () => setOpenModalWorkoutDay(false)

  const [openModalDayExercise, setOpenModalDayExercise] = useState(false)
  const handleOpenModalDayExercise = () => setOpenModalDayExercise(true)
  const handleCloseModalDayExercise = () => setOpenModalDayExercise(false)

  useEffect(() => {
    execute({
      url: `/manager/workout?page=${page}`,
      method: 'get'
    })
    executeWorkoutDay({
      url: `/manager/workout_day/`,
      method: 'get'
    })
    executeDayExercise({
      url: `/manager/day_exercise/`,
      method: 'get'
    })
    executeDifficulty({
      url: '/exercise/difficulty',
      method: 'get'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (loading) {
      toast.info('Carregando...')
    } else {
      toast.dismiss()
    }
  }, [loading])

  useEffect(() => {
    if (error || response?.code !== 200) {
      toast.error(
        response?.message === 'Request failed with status code 404'
          ? 'Não foi encontrado nenhuma ficha de treino'
          : response?.message
      )
    }
    if (response?.data?.count === 0) {
      toast.error('Não foi encontrado nenhuma ficha de treino')
    }
  }, [error, response?.code, response?.data?.count, response?.message])

  const handlePage = async page => {
    setPage(page)
    await execute({
      url: `/manager/workout?
      ${difficulty !== '' ? `difficulty=${difficulty}` : ''}
      ${visibility !== '' ? `&public=${visibility}` : ''}&page=${page}`,
      method: 'get'
    })
  }

  const handleExercise = async id => {
    console.log(id)
    await executeExerciseId({
      url: `/exercise/exercise/${id}`,
      method: 'get'
    })
    handleOpenModal()
  }

  const handleWorkout = id => {
    const filterWorkoutDay = responseWorkoutDay?.data?.filter(
      workoutDay => workoutDay.workout === id
    )
    if (filterWorkoutDay.length === 0) {
      toast.error('Não foi encontrado nenhum dia de treino')
      setWorkoutDays([])
    } else {
      setWorkoutDays(filterWorkoutDay)
      handleOpenModalWorkoutDay()
    }
  }

  const handleDayExercise = id => {
    const filterDayExercise = responseDayExercise?.data?.filter(
      dayExercise => dayExercise.day_list === id
    )
    if (filterDayExercise.length === 0) {
      toast.error('Não foi encontrado nenhum exercício para esse dia')
      setDayExercises([])
    } else {
      setDayExercises(filterDayExercise)
      handleOpenModalDayExercise()
    }
  }

  const handleFilter = async e => {
    e.preventDefault()
    setDifficulty(e.target.difficulty.value)
    setVisibility(e.target.visibility.value)
    console.log(e.target.visibility.value)

    await execute({
      url: `/manager/workout?${
        e.target.difficulty.value !== ''
          ? `difficulty=${e.target.difficulty.value}`
          : ''
      }${
        e.target.visibility.value !== ''
          ? `&public=${e.target.visibility.value}`
          : ''
      }`,
      method: 'get'
    })
  }

  return (
    <>
      <ToastContainer
        p
        on="top-right"
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

      <Container $openModal={openModal || openModalWorkoutDay}>
        <Header>
          <h1>Fichas de treino</h1>
          <Button to="/ManagerWorkout/">Gerenciar fichas</Button>

          <FormGroup onSubmit={handleFilter}>
            <Select name="visibility" id="visibility" defaultValue="">
              <option value="">Visibilidade</option>
              <option value="true">Público</option>
              <option value="false">Privado</option>
            </Select>
            <Select name="difficulty" id="id_difficulty" defaultValue="">
              <option value="">Dificuldade</option>
              {responseDifficulty?.data?.map(difficulty => (
                <option key={difficulty.id} value={difficulty.id}>
                  {difficulty.name}
                </option>
              ))}
            </Select>
            <ButtonSearch type="submit">Enviar</ButtonSearch>
          </FormGroup>
        </Header>
        <Main>
          {response?.data?.results?.map(sheet => (
            <SheetWorkout
              key={sheet.id}
              onClick={() => handleWorkout(sheet.id)}
            >
              <div>
                <h2>{sheet.name}</h2>
                <div>
                  <p
                    style={
                      sheet?.difficulty === 1
                        ? { backgroundColor: '#1eb738' }
                        : sheet?.difficulty === 3
                        ? { backgroundColor: '#bda21b' }
                        : sheet?.difficulty === 2
                        ? { backgroundColor: 'var(--dif-advanced)' }
                        : null
                    }
                  >
                    {difficultyObj[sheet.difficulty]}
                  </p>
                  <p>{sheet.public ? 'Público' : 'Privado'}</p>
                  <p>{sheet.default ? 'Padrão' : 'Não padrão'}</p>
                </div>
              </div>
              <p>{sheet.description}</p>
            </SheetWorkout>
          ))}
        </Main>
        <Pagination page={page} handlePage={handlePage} response={response} />
      </Container>

      <ModalWorkoutDay
        openModalWorkoutDay={openModalWorkoutDay}
        handleCloseModalWorkoutDay={handleCloseModalWorkoutDay}
        workoutDays={workoutDays}
        handleDayExercise={handleDayExercise}
      />

      <ModalDayExercise
        openModalDayExercise={openModalDayExercise}
        handleCloseModalDayExercise={handleCloseModalDayExercise}
        dayExercises={dayExercises}
        handleExercise={handleExercise}
      />

      <ModalExercise
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        responseExerciseId={responseExerciseId}
        handleExercise={handleExercise}
      />
    </>
  )
}

export default Workouts
