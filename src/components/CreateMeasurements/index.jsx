import { useState, useEffect, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import styled from 'styled-components'

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`

import { AuthContext } from '../../context/AuthContext'
import useAxios from '../../hooks/useAxios'

import {
  Wrapper,
  WrapperTop,
  Form,
  WrapperInput,
  BtnSubmit
} from '../../pages/Auth/styles'

const CreateMeasurements = () => {
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

  useEffect(() => {
    if (submitted) {
      setSubmitted(false)
      execute({
        url: 'account/measurements',
        method: 'POST',
        data
      })
    }

    if (error) {
      toast.error(
        'Ocorreu um erro ao processar a solicitação. Tente novamente.'
      )
    }
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
    } else if (response?.response?.status === 500) {
      toast.error('Ocorreu um erro interno no servidor. Tente novamente.')
    }
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
            <h1>Nova Medida - {date}</h1>
          </div>
        </WrapperTop>
        <Form onSubmit={handleSubmit}>
          <WrapperInput>
            <label htmlFor="weight">Peso</label>
            <input
              type="number"
              min="1"
              max="999.99"
              step="0.01"
              name="weight"
              id="weight"
              placeholder="Peso"
              value={data.weight}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="height">Altura</label>
            <input
              type="number"
              min="1"
              max="999.99"
              step="0.01"
              name="height"
              id="height"
              placeholder="Altura"
              value={data.height}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="shoulder">Ombro</label>
            <input
              type="number"
              min="1"
              max="999.99"
              step="0.01"
              name="shoulder"
              id="shoulder"
              placeholder="Ombro"
              value={data.shoulder}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="chest">Peito</label>
            <input
              type="number"
              min="1"
              max="999.99"
              step="0.01"
              name="chest"
              id="chest"
              placeholder="Peito"
              value={data.chest}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="right_arm">Braço Direito</label>
            <input
              type="number"
              min="1"
              max="999.99"
              step="0.01"
              name="right_arm"
              id="right_arm"
              placeholder="Braço Direito"
              value={data.right_arm}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="left_arm">Braço Esquerdo</label>
            <input
              type="number"
              min="1"
              max="999.99"
              step="0.01"
              name="left_arm"
              id="left_arm"
              placeholder="Braço Esquerdo"
              value={data.left_arm}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="right_forearm">Antebraço Direito</label>
            <input
              type="number"
              min="1"
              max="999.99"
              step="0.01"
              name="right_forearm"
              id="right_forearm"
              placeholder="Antebraço Direito"
              value={data.right_forearm}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="left_forearm">Antebraço Esquerdo</label>
            <input
              type="number"
              min="1"
              max="999.99"
              step="0.01"
              name="left_forearm"
              id="left_forearm"
              placeholder="Antebraço Esquerdo"
              value={data.left_forearm}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="right_fist">Punho Direito</label>
            <input
              type="number"
              min="1"
              max="999"
              step="0.01"
              name="right_fist"
              id="right_fist"
              placeholder="Punho Direito"
              value={data.right_fist}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="left_fist">Punho Esquerdo</label>
            <input
              type="number"
              min="1"
              max="999"
              step="0.01"
              name="left_fist"
              id="left_fist"
              placeholder="Punho Esquerdo"
              value={data.left_fist}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="waist">Cintura</label>
            <input
              type="number"
              min="1"
              max="999.99"
              step="0.01"
              name="waist"
              id="waist"
              placeholder="Cintura"
              value={data.waist}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="abdomen">Abdômen</label>
            <input
              type="number"
              min="1"
              max="999.99"
              step="0.01"
              name="abdomen"
              id="abdomen"
              placeholder="Abdômen"
              value={data.abdomen}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="hip">Quadril</label>
            <input
              type="number"
              min="1"
              max="999.99"
              step="0.01"
              name="hip"
              id="hip"
              placeholder="Quadril"
              value={data.hip}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="right_thigh">Coxa Direita</label>
            <input
              type="number"
              min="1"
              max="999"
              step="0.01"
              name="right_thigh"
              id="right_thigh"
              placeholder="Coxa Direita"
              value={data.right_thigh}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="left_thigh">Coxa Esquerda</label>
            <input
              type="number"
              min="1"
              max="999"
              step="0.01"
              name="left_thigh"
              id="left_thigh"
              placeholder="Coxa Esquerda"
              value={data.left_thigh}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="right_calf">Panturrilha Direita</label>
            <input
              type="number"
              min="1"
              max="999"
              step="0.01"
              name="right_calf"
              id="right_calf"
              placeholder="Panturrilha Direita"
              value={data.right_calf}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="left_calf">Panturrilha Esquerda</label>
            <input
              type="number"
              min="1"
              max="999"
              step="0.01"
              name="left_calf"
              id="left_calf"
              placeholder="Panturrilha Esquerda"
              value={data.left_calf}
              onChange={handleInputChange}
              required
            />
          </WrapperInput>
          <BtnSubmit type="submit">Registrar</BtnSubmit>
        </Form>
      </Wrapper>
    </ContainerWrapper>
  )
}

export default CreateMeasurements
