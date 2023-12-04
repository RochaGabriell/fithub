import { useState, useEffect, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'
import useAxios from '../../hooks/useAxios'

import {
  Wrapper,
  WrapperTop,
  Form,
  WrapperInput,
  BtnSubmit
} from '../../pages/Auth/styles'
import ContainerWrapper from './styles'

const FormMeasurements = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const { response, error, execute } = useAxios(null)
  const [submitted, setSubmitted] = useState(false)
  const [date, setDate] = useState(null)
  const translations = {
    weight: 'Peso',
    height: 'Altura',
    shoulder: 'Ombro',
    chest: 'Peito',
    right_arm: 'Braço Direito',
    left_arm: 'Braço Esquerdo',
    right_forearm: 'Antebraço Direito',
    left_forearm: 'Antebraço Esquerdo',
    right_fist: 'Punho Direito',
    left_fist: 'Punho Esquerdo',
    waist: 'Cintura',
    abdomen: 'Abdômen',
    hip: 'Quadril',
    right_thigh: 'Coxa Direita',
    left_thigh: 'Coxa Esquerda',
    right_calf: 'Panturrilha Direita',
    left_calf: 'Panturrilha Esquerda',
    user: 'Usuário'
  }
  const [data, setData] = useState({
    weight: '',
    height: '',
    shoulder: '',
    chest: '',
    right_arm: '',
    left_arm: '',
    right_forearm: '',
    left_forearm: '',
    right_fist: '',
    left_fist: '',
    waist: '',
    abdomen: '',
    hip: '',
    right_thigh: '',
    left_thigh: '',
    right_calf: '',
    left_calf: '',
    user: user.user_id
  })
  const translateKey = key => translations[key] || key
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      execute({
        url: `account/measurements/${id}`,
        method: 'GET'
      })
    }

    if (submitted) {
      setSubmitted(false)
      execute({
        url: id ? `account/measurements/${id}` : 'account/measurements',
        method: id ? 'PUT' : 'POST',
        data
      })

      if (response?.status === 200) {
        toast.success('Medida atualizada com sucesso!')
        setTimeout(() => {
          navigate('/measurements')
        }, 2000)
      }
    }

    if (error) {
      toast.error(
        'Ocorreu um erro ao processar a solicitação. Tente novamente.'
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted, error])

  useEffect(() => {
    if (response?.response?.status === 400) {
      const { data } = response.response
      if (data) {
        Object.entries(data).forEach(([key, value]) => {
          const translatedKey = translateKey(key)
          const errorMessage = value || 'Erro desconhecido'
          toast.error(`${translatedKey}: ${errorMessage}`)
        })
      }
    } else if (response?.response?.status === 401) {
      toast.error('Você não tem permissão para realizar esta ação.')
    } else if (response?.response?.status === 404) {
      toast.error('Medida não encontrada.')
    } else if (response?.response?.status === 500) {
      toast.error('Ocorreu um erro interno no servidor. Tente novamente.')
    } else if (response?.status === 201) {
      toast.success('Medida registrada com sucesso!')
      setTimeout(() => {
        navigate('/measurements')
      }, 2000)
    }

    if (response?.data) {
      setData(response.data)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response])

  useEffect(() => {
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
    setDate(today.toLocaleDateString())
  }, [])

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

  return (
    <ContainerWrapper>
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
      <Wrapper>
        <WrapperTop>
          <div>
            {id ? (
              <h1>
                Editar Medida {'- ' + response?.data?.created_at.split('T')[0]}
              </h1>
            ) : (
              <h1>Nova Medida {'- ' + date}</h1>
            )}
          </div>
        </WrapperTop>
        <Form onSubmit={handleSubmit}>
          {Object.keys(data).map(
            (item, index) =>
              item !== 'id' &&
              item !== 'user' &&
              item !== 'created_at' &&
              item !== 'updated_at' && (
                <WrapperInput key={index}>
                  <label htmlFor={item}>{translateKey(item)}</label>
                  <input
                    type="number"
                    min="1"
                    max="999.99"
                    step="0.01"
                    name={item}
                    id={item}
                    placeholder={translateKey(item)}
                    value={data[item]}
                    onChange={handleInputChange}
                    required
                  />
                </WrapperInput>
              )
          )}
          <BtnSubmit type="submit">{id ? 'Atualizar' : 'Registrar'}</BtnSubmit>
        </Form>
      </Wrapper>
    </ContainerWrapper>
  )
}

export default FormMeasurements
