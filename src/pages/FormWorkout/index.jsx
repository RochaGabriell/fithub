import { ToastContainer, toast } from 'react-toastify'
import { useContext, useEffect, useState } from 'react'

import useAxios from '../../hooks/useAxios'

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../../context/AuthContext'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 100%;
  height: 100%;
`

const Header = styled.header`
  background-color: var(--secondary);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 3rem;
  margin-bottom: 0.7rem;
  border-radius: 5px;
  border: 1px solid var(--tertiary);

  h1 {
    font-size: 1.5rem;
    color: var(--tertiary);
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  height: 100%;
  min-height: 490px;
`

const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 390px;
  gap: 5px;

  input {
    width: 100%;
    max-width: 390px;
    height: 35px;
    border-radius: 10px;
    padding: 0 8px;
  }

  textarea {
    width: 100%;
    max-width: 390px;
    height: 100px;

    border-radius: 10px;
    padding: 8px;
    resize: none;
  }
`

const WrapperInputCheck = styled(WrapperInput)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 5px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    input {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
`

const Button = styled(Link)`
  background-color: var(--btn-selected);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: var(--tertiary);
  font-weight: bold;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    background-color: var(--tertiary);
    color: var(--primary);
  }
`

const BtnSubmit = styled.button`
  width: 100%;
  max-width: 390px;
  height: 35px;
  border-radius: 10px;
  background-color: var(--btn-selected);
  color: white;
`

const Select = styled.select`
  height: 2rem;
  border-radius: 5px;
  border: 1px solid var(--tertiary);
  padding: 0 0.5rem;
`

const FormWorkout = () => {
  const { user } = useContext(AuthContext)
  const { response, error, loading, execute } = useAxios(null)
  const { response: responseDifficulty, execute: executeDifficulty } =
    useAxios(null)
  const [submitted, setSubmitted] = useState(false)
  const [is_public, setIsPublic] = useState(false)
  const [is_default, setIsDefault] = useState(false)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted])

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
  }, [
    error,
    response?.code,
    response?.data?.count,
    response?.message,
    response?.response,
    response?.status
  ])

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
      <Container>
        <Header>
          <Button to="/workouts">Voltar</Button>
          <h1>Criar Treino</h1>
          <Button to="/workouts">Criar Semana de Treino</Button>
          <Button to="/workouts">Criar Serie de Treino</Button>
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
      </Container>
    </>
  )
}

export default FormWorkout
