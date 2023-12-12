import { toast } from 'react-toastify'
import { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

import { AuthContext } from '../../context/AuthContext'
import Pagination from '../../components/Pagination'
import useAxios from '../../hooks/useAxios'

import {
  Header,
  Form,
  WrapperInput,
  WrapperInputCheck,
  Button,
  BtnSubmit,
  Select,
  WrapperForm,
  WrapperList,
  MainList,
  ItemList
} from '../../pages/FormWorkoutPage/styles'

const WorkoutForm = () => {
  const { id } = useParams()
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const { response, error, execute } = useAxios(null)
  const { response: responseMyWorkout, execute: executeMyWorkout } =
    useAxios(null)
  const { response: responseDifficulty, execute: executeDifficulty } =
    useAxios(null)
  const [submitted, setSubmitted] = useState(false)
  const [is_public, setIsPublic] = useState(false)
  const [is_default, setIsDefault] = useState(false)
  const [page, setPage] = useState(1)
  const [data, setData] = useState({
    name: '',
    description: '',
    public: is_public,
    default: is_default,
    user: user.user_id,
    difficulty: ''
  })

  useEffect(() => {
    executeDifficulty({
      url: '/exercise/difficulty',
      method: 'get'
    })
    executeMyWorkout({
      url: `/manager/workout/`,
      method: 'get'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (id) {
      execute({
        url: `/manager/workout/${id}`,
        method: 'get'
      })
    }

    if (submitted) {
      setSubmitted(false)
      execute({
        url: id ? `/manager/workout/${id}/` : '/manager/workout/',
        method: id ? 'put' : 'post',
        data
      })

      if (response?.status === 200 && id) {
        toast.success('Treino atualizado com sucesso!')
        setTimeout(() => {
          navigate('/ManagerWorkout')
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
  }, [id, response?.status, submitted, error])

  useEffect(() => {
    if (response?.data?.count === 0) {
      toast.error('Não foi encontrado nenhuma ficha de treino')
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
      toast.error('Ficha de treino não encontrada.')
    } else if (response?.response?.status === 500) {
      toast.error('Ocorreu um erro interno no servidor. Tente novamente.')
    } else if (response?.status === 201) {
      toast.success('Ficha de treino criado com sucesso!')
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } else if (response?.status === 204) {
      toast.success('Ficha de treino excluído com sucesso!')
      setTimeout(() => {
        navigate('/ManagerWorkout')
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

    if (name === 'public') {
      setIsPublic(!is_public)
      setData(prevData => ({
        ...prevData,
        public: !is_public
      }))
    }

    if (name === 'default') {
      setIsDefault(!is_default)
      setData(prevData => ({
        ...prevData,
        default: !is_default
      }))
    }

    if (name !== 'public' && name !== 'default') {
      setData(prevData => ({
        ...prevData,
        [name]: value
      }))
    }
  }

  const handlePage = async page => {
    setPage(page)
    await execute({
      url: `/manager/workout?page=${page}`,
      method: 'get'
    })
  }

  const confirmDelete = id => {
    swal({
      title: 'Tem certeza que deseja excluir?',
      text: 'Uma vez excluído, você não poderá recuperar esta ficha de treino!',
      buttons: ['Cancelar', 'Excluir']
    }).then(async willDelete => {
      if (willDelete) {
        try {
          await execute({
            url: `/manager/workout/${id}`,
            method: 'delete'
          })
          handlePage(1)
        } catch (error) {
          toast.error(
            'Ocorreu um erro ao excluir a ficha de treino. Tente novamente.'
          )
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

  return (
    <>
      <WrapperList>
        <Header>
          <h1>Meus Treinos</h1>
        </Header>
        <MainList>
          {responseMyWorkout?.data?.results?.map(
            workout =>
              user.user_id === workout.user && (
                <ItemList
                  key={workout.id}
                  style={{
                    backgroundColor:
                      id != workout.id ? '' : 'var(--btn-selected)'
                  }}
                >
                  <div>
                    <h2>{workout.name}</h2>
                    <div>
                      <Button
                        to={`/ManagerWorkout/workout/${workout.id}`}
                        style={{
                          border:
                            id != workout.id
                              ? ''
                              : 'solid 1px var(--quaternary)'
                        }}
                      >
                        Editar
                      </Button>
                      <Button
                        className="btn-danger"
                        onClick={() => confirmDelete(workout.id)}
                      >
                        Excluir
                      </Button>
                    </div>
                  </div>
                </ItemList>
              )
          )}
        </MainList>

        <Pagination
          page={page}
          handlePage={handlePage}
          response={responseMyWorkout}
        />
      </WrapperList>

      <WrapperForm>
        <Header>
          <h1> {id ? 'Editar Treino' : 'Criar Treino'}</h1>
        </Header>
        <Form onSubmit={handleSubmit}>
          <WrapperInput>
            <label className="col-sm-2 control-label ">Nome do treino</label>
            <input
              name="name"
              id="name"
              placeholder="Nome do treino"
              value={data.name}
              onChange={handleInputChange}
              type="text"
              required
            />
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
          <WrapperInputCheck>
            <div>
              <label className="col-sm-2 control-label ">Público</label>
              <input
                type="checkbox"
                name="public"
                checked={data.public}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="col-sm-2 control-label ">Padrão</label>
              <input
                type="checkbox"
                name="default"
                checked={data.default}
                onChange={handleInputChange}
              />
            </div>
          </WrapperInputCheck>
          <WrapperInput>
            <label>Dificuldade</label>
            <Select
              name="difficulty"
              id="difficulty"
              value={data.difficulty}
              onChange={handleInputChange}
              required
            >
              <option value="">Dificuldade</option>
              {responseDifficulty?.data?.map(difficulty => (
                <option key={difficulty.id} value={difficulty.id}>
                  {difficulty.name}
                </option>
              ))}
            </Select>
          </WrapperInput>
          <BtnSubmit type="submit">
            {id ? 'Atualizar Treino' : 'Criar Treino'}
          </BtnSubmit>
        </Form>
      </WrapperForm>
    </>
  )
}

export default WorkoutForm
