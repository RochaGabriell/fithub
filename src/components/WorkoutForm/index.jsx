import { toast } from 'react-toastify'
import { useContext, useEffect, useState } from 'react'

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
  const { user } = useContext(AuthContext)
  const { response, error, loading, execute } = useAxios(null)
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
    if (submitted) {
      setSubmitted(false)
      execute({
        url: '/manager/workout/',
        method: 'post',
        data
      })
    }
    if (response?.status === 201) {
      executeMyWorkout({
        url: `/manager/workout/`,
        method: 'get'
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response?.status, submitted])

  useEffect(() => {
    if (loading) {
      toast.info('Carregando...')
    } else {
      toast.dismiss()
    }
  }, [loading])

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
      toast.error('Medida não encontrada.')
    } else if (response?.response?.status === 500) {
      toast.error('Ocorreu um erro interno no servidor. Tente novamente.')
    } else if (response?.status === 201) {
      toast.success('Treino criado com sucesso!')
    }
  }, [error, response?.data?.count, response?.response, response?.status])

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
                <ItemList key={workout.id}>
                  <div>
                    <h2>{workout.name}</h2>
                    <div>
                      <Button to={`/ManagerWorkout/workout/${workout.id}`}>
                        Editar
                      </Button>
                      <Button className="btn-danger">Excluir</Button>
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
          <h1>Criar Treino</h1>
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
                value={data.public}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="col-sm-2 control-label ">Padrão</label>
              <input
                type="checkbox"
                name="default"
                value={data.default}
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
          <BtnSubmit type="submit">Criar Treino</BtnSubmit>
        </Form>
      </WrapperForm>
    </>
  )
}

export default WorkoutForm
