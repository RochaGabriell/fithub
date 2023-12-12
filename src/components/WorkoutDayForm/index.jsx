import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

import useAxios from '../../hooks/useAxios'

import {
  Header,
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

const WorkoutDayForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { response, error, execute } = useAxios(null)
  const { response: responseMyWorkout, execute: executeMyWorkout } =
    useAxios(null)
  const { response: responseWorkoutDay, execute: executeWorkoutDay } =
    useAxios(null)
  const [submitted, setSubmitted] = useState(false)
  const [workout, setWorkout] = useState('')
  const [data, setData] = useState({
    day: '',
    description: '',
    workout: workout
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

  useEffect(() => {
    executeMyWorkout({
      url: `/manager/workout/`,
      method: 'get'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (workout) {
      executeWorkoutDay({
        url: `/manager/workout_day?workout=${workout}`,
        method: 'get'
      })
    }

    if (id) {
      execute({
        url: `/manager/workout_day/${id}`,
        method: 'get'
      })
    }

    if (submitted) {
      setSubmitted(false)
      execute({
        url: id ? `/manager/workout_day/${id}/` : '/manager/workout_day/',
        method: id ? 'put' : 'post',
        data
      })

      if (response?.status === 200 && id) {
        toast.success('Treino atualizado com sucesso!')
        setTimeout(() => {
          navigate('/ManagerWorkout/workout_day')
          window.location.reload()
        }, 2000)
      }
    }

    if (response?.status === 201 || response?.status === 200) {
      executeMyWorkout({
        url: `/manager/workout/`,
        method: 'get'
      })
    }

    if (error) {
      toast.error(
        'Ocorreu um erro ao processar a solicitação. Tente novamente.'
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, response?.status, submitted, error, workout])

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
        navigate('/ManagerWorkout/workout_day')
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
            url: `/manager/workout_day/${id}/`,
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

  return (
    <>
      <WrapperList>
        <div>
          <Header>
            <h1>Treinos</h1>
            <Select name="workout" id="workout" onChange={handleWorkoutChange}>
              <option value="">Selecione um treino</option>
              {responseMyWorkout?.data?.results?.map(workout => (
                <option key={workout.id} value={workout.id}>
                  {workout.name}
                </option>
              ))}
            </Select>
          </Header>
        </div>
        <Header>
          <h1>Dias de Treino</h1>
        </Header>
        <MainList>
          {responseWorkoutDay?.data?.length > 0 ? (
            responseWorkoutDay?.data?.map(workoutDay => (
              <ItemList
                key={workoutDay.id}
                style={{
                  backgroundColor:
                    id != workoutDay.id ? '' : 'var(--btn-selected)'
                }}
              >
                <div>
                  <h2>{weekdays[workoutDay.day]}</h2>
                  <div>
                    <Button
                      to={`/ManagerWorkout/workout_day/${workoutDay.id}`}
                      style={{
                        border:
                          id != workoutDay.id
                            ? ''
                            : 'solid 1px var(--quaternary)'
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      className="btn-danger"
                      onClick={() => confirmDelete(workoutDay.id)}
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

      <WrapperForm>
        <Header>
          <h1> {id ? 'Editar Dia de Treino' : 'Criar Dia de Treino'}</h1>
        </Header>
        <Form onSubmit={handleSubmit}>
          <WrapperInput>
            <label>Nome do treino</label>
            <Select
              name="workout"
              id="workout"
              value={data.workout}
              onChange={handleInputChange}
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
          <WrapperInput>
            <label>Selecione o dia da semana</label>
            <Select
              name="day"
              id="day"
              value={data.day}
              onChange={handleInputChange}
              required
            >
              <option value="">Selecione um dia</option>
              {Object.entries(weekdays).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </Select>
          </WrapperInput>
          <WrapperInput>
            <label className="col-sm-2 control-label ">
              Descrição do treino
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Descrição do treino"
              value={data.description}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <BtnSubmit type="submit">
            {id ? 'Atualizar Dia de Treino' : 'Criar Dia de Treino'}
          </BtnSubmit>
        </Form>
      </WrapperForm>
    </>
  )
}

export default WorkoutDayForm
