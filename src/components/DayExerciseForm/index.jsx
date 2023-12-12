import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

import useAxios from '../../hooks/useAxios'

import View from '../../assets/view.svg'
import {
  Header,
  WrapperSelect,
  Form,
  WrapperInput,
  Button,
  BtnSubmit,
  Select,
  WrapperForm,
  WrapperList,
  MainList,
  ItemList
} from '../../pages/FormWorkoutPage/styles'
import ModalExercise from '../ModalExercise'

const DayExerciseForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { response, error, execute } = useAxios(null)
  const { response: responseMyWorkout, execute: executeMyWorkout } =
    useAxios(null)
  const { response: responseMyDayList, execute: executeMyDayList } =
    useAxios(null)
  const { response: responseMyDayExercise, execute: executeMyDayExercise } =
    useAxios(null)
  const { response: responseExerciseId, execute: executeExerciseId } =
    useAxios(null)
  const { response: responseExercise, execute: executeExercise } =
    useAxios(null)
  const [submitted, setSubmitted] = useState(false)
  const [workout, setWorkout] = useState('')
  const [day, setDay] = useState('')
  const [data, setData] = useState({
    day_list: '',
    exercise: '',
    exercisesDetails: '',
    series: '',
    repetitions: '',
    weight: 0
  })
  const weekdays = {
    1: 'Segunda-feira',
    2: 'Terça-feira',
    3: 'Quarta-feira',
    4: 'Quinta-feira',
    5: 'Sexta-feira',
    6: 'Sábado',
    7: 'Domingo'
  }

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const handleExercise = async id => {
    await executeExerciseId({
      url: `/exercise/exercise/${id}`,
      method: 'get'
    })
    handleOpenModal()
  }

  useEffect(() => {
    executeMyWorkout({
      url: `/manager/workout/my/`,
      method: 'get'
    })
    executeExercise({
      url: `/exercise/exercise/all`,
      method: 'get'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (workout) {
      executeMyDayList({
        url: `/manager/workout_day/?workout=${workout}`,
        method: 'get'
      })
    }

    if (day) {
      executeMyDayExercise({
        url: `/manager/day_exercise/?day_list=${day}`,
        method: 'get'
      })
    }

    if (id) {
      execute({
        url: `/manager/day_exercise/${id}`,
        method: 'get'
      })

      executeMyDayList({
        url: `/manager/workout_day/${data.day_list}`,
        method: 'get'
      })
    }

    if (submitted) {
      setSubmitted(false)
      execute({
        url: id ? `/manager/day_exercise/${id}/` : '/manager/day_exercise/',
        method: id ? 'put' : 'post',
        data
      })

      if (response?.status === 200 && id) {
        toast.success('Treino atualizado com sucesso!')
        setTimeout(() => {
          navigate('/ManagerWorkout/day_exercise')
          window.location.reload()
        }, 2000)
      }
    }

    if (error) {
      toast.error(
        'Ocorreu um erro ao processar a solicitação. Tente novamente.'
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, response?.status, submitted, error, workout, day])

  useEffect(() => {
    if (response?.data?.count === 0) {
      toast.error('Não foi encontrado nenhum treino')
    }
    if (response?.response?.status === 400) {
      const { data } = response.response
      if (data) {
        // eslint-disable-next-line no-unused-vars
        Object.entries(data).forEach(([key, value]) => {
          const errorMessage = value || 'Erro desconhecido'
          toast.error(`${errorMessage}`)
        })
      }
    } else if (response?.response?.status === 401) {
      toast.error('Você não tem permissão para realizar esta ação.')
    } else if (response?.response?.status === 404) {
      toast.error('Não foi encontrado nenhum treino')
    } else if (response?.response?.status === 500) {
      toast.error('Ocorreu um erro interno no servidor. Tente novamente.')
    } else if (response?.status === 201) {
      toast.success('Treino criado com sucesso!')
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } else if (response?.status === 204) {
      toast.success('Treino excluído com sucesso!')
      setTimeout(() => {
        navigate('/ManagerWorkout/day_exercise')
        window.location.reload()
      }, 2000)
    }

    if (response?.data) {
      setData(response.data)
    }
  }, [navigate, response])

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleInputChange = e => {
    const { name, value } = e.target

    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const confirmDelete = id => {
    swal({
      title: 'Tem certeza que deseja excluir?',
      text: 'Uma vez excluído, você não poderá recuperar este treino!',
      buttons: ['Cancelar', 'Excluir']
    }).then(async willDelete => {
      if (willDelete) {
        try {
          await execute({
            url: `/manager/day_exercise/${id}/`,
            method: 'delete'
          })
        } catch (error) {
          toast.error('Ocorreu um erro ao excluir o treino. Tente novamente.')
        }
      }
    })

    const swalBackground = document.querySelector('.swal-modal')
    const swalBtnBackground = document.querySelector('.swal-button--confirm')
    const swalTitle = document.querySelector('.swal-title')
    const swalText = document.querySelector('.swal-text')

    swalBackground.style.backgroundColor = 'var(--primary)'
    swalBackground.style.boxShadow = '0px 0px 10px 0px var(--quaternary)'
    swalBtnBackground.style.backgroundColor = 'var(--btn-red)'
    swalTitle.style.color = 'var(--quaternary)'
    swalText.style.color = 'var(--quaternary)'
  }

  const handleWorkoutChange = e => {
    const { value } = e.target
    setWorkout(value)
  }

  const handleDayChange = e => {
    const { value } = e.target
    setDay(value)
  }

  return (
    <>
      <WrapperList>
        <div>
          <Header className="HeaderDayExercise">
            <h1>Dias de Treino</h1>
            <WrapperSelect>
              <Select
                name="workout"
                id="workout"
                onChange={handleWorkoutChange}
                value={workout}
              >
                <option value="">Selecione um treino</option>
                {responseMyWorkout?.data?.results?.map(workout => (
                  <option key={workout.id} value={workout.id}>
                    {workout.name}
                  </option>
                ))}
              </Select>

              <Select
                name="day_list"
                id="day_list"
                onChange={handleDayChange}
                value={day}
              >
                <option value="">Selecione um dia</option>
                {Array.isArray(responseMyDayList?.data) ? (
                  responseMyDayList?.data?.map(workoutDay => (
                    <option key={workoutDay.id} value={workoutDay.id}>
                      {workoutDay.description} - {weekdays[workoutDay.day]}
                    </option>
                  ))
                ) : (
                  <option value={responseMyDayList?.data?.id} selected>
                    {responseMyDayList?.data?.description} -{' '}
                    {weekdays[responseMyDayList?.data?.day]}
                  </option>
                )}
              </Select>
            </WrapperSelect>
          </Header>
        </div>

        <Header>
          <h1>Exercícios do dia</h1>
        </Header>
        <MainList>
          {responseMyDayExercise?.data?.length > 0 ? (
            responseMyDayExercise?.data?.map(dayExercise => (
              <ItemList
                key={dayExercise.id}
                style={{
                  backgroundColor:
                    id != dayExercise.id ? '' : 'var(--btn-selected)'
                }}
              >
                <div>
                  <h2 onClick={() => handleExercise(dayExercise.exercise)}>
                    {dayExercise.exercisesDetails?.name}
                  </h2>
                  <div>
                    <Button
                      to={`/ManagerWorkout/day_exercise/${dayExercise.id}`}
                      style={{
                        border:
                          id != dayExercise.id
                            ? ''
                            : 'solid 1px var(--quaternary)'
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      className="btn-danger"
                      onClick={() => confirmDelete(dayExercise.id)}
                    >
                      Excluir
                    </Button>
                  </div>
                </div>
              </ItemList>
            ))
          ) : (
            <ItemList>
              <div>
                <h2>Nenhum treino encontrado</h2>
              </div>
            </ItemList>
          )}
        </MainList>
      </WrapperList>

      <WrapperForm $openModal={openModal}>
        <Header>
          <h1> {id ? 'Editar Treino do Dia' : 'Criar Treino do Dia'}</h1>
        </Header>
        <Form onSubmit={handleSubmit}>
          {!id ? (
            <WrapperInput>
              <label>Nome do treino</label>
              <Select
                name="workout"
                id="workout"
                onChange={handleWorkoutChange}
                value={workout}
                required
              >
                <option value="">Selecione um treino</option>
                {responseMyWorkout?.data?.results?.map(workout => (
                  <option key={workout.id} value={workout.id}>
                    {workout.name}
                  </option>
                ))}
              </Select>
            </WrapperInput>
          ) : null}
          <WrapperInput>
            {!id ? (
              <>
                <label>Selecione o dia da semana</label>
                <Select
                  name="day_list"
                  id="day_list"
                  onChange={handleInputChange}
                  value={data.day_list}
                  required
                >
                  <option value="">Selecione um dia</option>
                  {Array.isArray(responseMyDayList?.data)
                    ? responseMyDayList?.data?.map(workoutDay => (
                        <option key={workoutDay.id} value={workoutDay.id}>
                          {workoutDay.description} - {weekdays[workoutDay.day]}
                        </option>
                      ))
                    : null}
                </Select>
              </>
            ) : (
              <>
                <label>
                  Dia da semana: {''}
                  {Array.isArray(responseMyDayList?.data)
                    ? responseMyDayList?.data?.map(workoutDay =>
                        workoutDay.id === data.day_list
                          ? workoutDay.description
                          : null
                      )
                    : responseMyDayList?.data?.description}
                </label>
              </>
            )}
          </WrapperInput>
          <WrapperInput>
            <label>
              Exercício
              {data.exercise ? (
                <Button
                  className="view"
                  onClick={() => handleExercise(data.exercise)}
                >
                  <img src={View} alt="Visualizar" />
                </Button>
              ) : null}
            </label>
            <Select
              name="exercise"
              id="exercise"
              value={data.exercise}
              onChange={handleInputChange}
              required
            >
              <option value="">Selecione um exercício</option>
              {responseExercise?.data?.map(exercise => (
                <option key={exercise.id} value={exercise.id}>
                  {exercise.name}
                </option>
              ))}
            </Select>
          </WrapperInput>
          <WrapperInput>
            <label>Séries</label>
            <input
              type="number"
              name="series"
              id="series"
              value={data.series}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label>Repetições</label>
            <input
              type="number"
              name="repetitions"
              id="repetitions"
              value={data.repetitions}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label>Peso</label>
            <input
              type="number"
              name="weight"
              id="weight"
              value={data.weight}
              onChange={handleInputChange}
            />
          </WrapperInput>
          <BtnSubmit type="submit">
            {id ? 'Atualizar Dia de Treino' : 'Criar Dia de Treino'}
          </BtnSubmit>
        </Form>
      </WrapperForm>

      <ModalExercise
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        responseExerciseId={responseExerciseId}
        handleExercise={handleExercise}
      />
    </>
  )
}

export default DayExerciseForm
