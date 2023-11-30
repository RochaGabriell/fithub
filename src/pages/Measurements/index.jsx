import { useEffect, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import useAxios from '../../hooks/useAxios'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

import {
  Container,
  Wrapper,
  WrapperTop,
  Form,
  WrapperInput
} from '../Auth/styles'

const ContainerMeasurements = styled(Container)`
  display: flex;
  gap: 20px;
  /* flex-wrap: wrap; */

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

const WrapperUpperMeasurements = styled.div`
  display: flex;
  gap: 10px;
`

const WrapperInputMeasurements = styled(WrapperInput)`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;

  div {
    width: max-content;
    height: 35px;
    border-radius: 10px;
    padding: 0 8px;
  }

  input {
    width: max-content;
  }

  div {
    display: flex;
    align-items: center;
  }
`

const WrapperGraph = styled(Wrapper)`
  background-color: transparent;
  padding: 0;
  gap: 20px;

  div {
    background-color: var(--tertiary);
    width: 100%;
    border-radius: 10px;
    padding: 10px;
  }
`

import { AuthContext } from '../../context/AuthContext'

const Measurements = () => {
  const { response, error, loading, execute } = useAxios(null)
  const { user } = useContext(AuthContext)

  const getDateFormat = date => {
    const dateObj = new Date(date)
    const day = dateObj.getDate()
    const month = dateObj.getMonth() + 1
    const year = dateObj.getFullYear()

    return `${day}/${month}/${year}`
  }

  useEffect(() => {
    if (error || response?.code !== 200) {
      toast.error(error)
      toast.error(
        response?.message === 'Request failed with status code 404'
          ? 'Você não possui medidas cadastradas'
          : response?.message
      )
    }
  }, [error, response?.code, response?.message])

  useEffect(() => {
    execute({
      url: `/account/measurements/${user.user_id}`,
      method: 'get'
    })
  }, [])

  console.log(response)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'IMC e RCQ'
      }
    }
  }

  const data = {
    labels: [
      'Janeria',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setempro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    datasets: [
      {
        label: 'IMC',
        data: [5, 15, 22, 43, 55, 60],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      },
      {
        label: 'RCQ',
        data: [12, 26, 33, 38, 37, 23],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  }

  return (
    <ContainerMeasurements>
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
            {response?.message === 'Request failed with status code 404' ? (
              <h1>Você não possui medidas cadastradas</h1>
            ) : (
              <h1>Medidas</h1>
            )}
            <span>{user.username}</span>
          </div>
        </WrapperTop>
        <Form>
          <WrapperUpperMeasurements>
            <WrapperInputMeasurements>
              <label htmlFor="ibm">IMC</label>
              <div
                style={{
                  backgroundColor:
                    response?.data?.bmi === 'Abaixo do peso'
                      ? 'blue'
                      : response?.data?.bmi === 'Peso normal'
                      ? 'green'
                      : response?.data?.bmi === 'Excesso de peso'
                      ? 'orange'
                      : response?.data?.bmi === 'Obesidade'
                      ? 'red'
                      : 'black'
                }}
              >
                {response?.data?.bmi}
              </div>
            </WrapperInputMeasurements>
            <WrapperInputMeasurements>
              <label htmlFor="rcq">RCQ</label>
              <div
                style={{
                  backgroundColor:
                    response?.data?.rcq === 'Baixo'
                      ? 'blue'
                      : response?.data?.rcq === 'Moderado'
                      ? 'green'
                      : response?.data?.rcq === 'Alto'
                      ? 'orange'
                      : 'black'
                }}
              >
                {response?.data?.rcq}
              </div>
            </WrapperInputMeasurements>
          </WrapperUpperMeasurements>
          <WrapperInputMeasurements>
            <label htmlFor="weight">Peso</label>
            <input
              type="number"
              name="weight"
              id="weight"
              value={response?.data?.weight || ''}
              readOnly
            />
          </WrapperInputMeasurements>
          <WrapperInputMeasurements>
            <label htmlFor="height">Altura</label>
            <input
              type="number"
              name="height"
              id="height"
              value={response?.data?.height || ''}
              readOnly
            />
          </WrapperInputMeasurements>
          <WrapperInputMeasurements>
            <label htmlFor="shoulder">Ombro</label>
            <input
              type="number"
              name="shoulder"
              id="shoulder"
              value={response?.data?.shoulder || ''}
              readOnly
            />
          </WrapperInputMeasurements>
          <WrapperInputMeasurements>
            <label htmlFor="chest">Peito</label>
            <input
              type="number"
              name="chest"
              id="chest"
              value={response?.data?.chest || ''}
              readOnly
            />
          </WrapperInputMeasurements>
          <WrapperInputMeasurements>
            <label htmlFor="right_arm">Braço direito</label>
            <input
              type="number"
              name="right_arm"
              id="right_arm"
              value={response?.data?.right_arm || ''}
              readOnly
            />
          </WrapperInputMeasurements>
          <WrapperInputMeasurements>
            <label htmlFor="left_arm">Braço esquerdo</label>
            <input
              type="number"
              name="left_arm"
              id="left_arm"
              value={response?.data?.left_arm || ''}
              readOnly
            />
          </WrapperInputMeasurements>
          <WrapperInputMeasurements>
            <label htmlFor="right_forearm">Antebraço direito</label>
            <input
              type="number"
              name="right_forearm"
              id="right_forearm"
              value={response?.data?.right_forearm || ''}
              readOnly
            />
          </WrapperInputMeasurements>
          <WrapperInputMeasurements>
            <label htmlFor="left_forearm">Antebraço esquerdo</label>
            <input
              type="number"
              name="left_forearm"
              id="left_forearm"
              value={response?.data?.left_forearm || ''}
              readOnly
            />
          </WrapperInputMeasurements>
          <WrapperInputMeasurements>
            <label htmlFor="right_fist">Punho direito</label>
            <input
              type="number"
              name="right_fist"
              id="right_fist"
              value={response?.data?.right_fist || ''}
              readOnly
            />
          </WrapperInputMeasurements>
          <WrapperInputMeasurements>
            <label htmlFor="left_fist">Punho esquerdo</label>
            <input
              type="number"
              name="left_fist"
              id="left_fist"
              value={response?.data?.left_fist || ''}
              readOnly
            />
          </WrapperInputMeasurements>
          <WrapperInputMeasurements>
            <label htmlFor="waist">Cintura</label>
            <input
              type="number"
              name="waist"
              id="waist"
              value={response?.data?.waist || ''}
              readOnly
            />
          </WrapperInputMeasurements>
          <WrapperInputMeasurements>
            <label htmlFor="abdomen">Abdômen</label>
            <input
              type="number"
              name="abdomen"
              id="abdomen"
              value={response?.data?.abdomen || ''}
              readOnly
            />
          </WrapperInputMeasurements>
          <WrapperInputMeasurements>
            <label htmlFor="hip">Quadril</label>
            <input
              type="number"
              name="hip"
              id="hip"
              value={response?.data?.hip || ''}
              readOnly
            />
          </WrapperInputMeasurements>
          <WrapperInputMeasurements>
            <label htmlFor="right_thigh">Coxa direita</label>
            <input
              type="number"
              name="right_thigh"
              id="right_thigh"
              value={response?.data?.right_thigh || ''}
              readOnly
            />
          </WrapperInputMeasurements>
          <WrapperInputMeasurements>
            <label htmlFor="left_thigh">Coxa esquerda</label>
            <input
              type="number"
              name="left_thigh"
              id="left_thigh"
              value={response?.data?.left_thigh || ''}
              readOnly
            />
          </WrapperInputMeasurements>
          <WrapperInputMeasurements>
            <label htmlFor="right_calf">Panturrilha direita</label>
            <input
              type="number"
              name="right_calf"
              id="right_calf"
              value={response?.data?.right_calf || ''}
              readOnly
            />
          </WrapperInputMeasurements>
          <WrapperInputMeasurements>
            <label htmlFor="left_calf">Panturrilha esquerda</label>
            <input
              type="number"
              name="left_calf"
              id="left_calf"
              value={response?.data?.left_calf || ''}
              readOnly
            />
          </WrapperInputMeasurements>
          <WrapperInputMeasurements>
            <label htmlFor="created_at">Data de medição</label>
            <input
              type="text"
              name="created_at"
              id="created_at"
              value={getDateFormat(response?.data?.created_at) || ''}
              readOnly
            />
          </WrapperInputMeasurements>
        </Form>
      </Wrapper>
      <WrapperGraph>
        <div style={{ textAlign: 'center' }}>
          <h1>Gráficos</h1>
        </div>
        <div>
          <Line options={options} data={data} />
        </div>
        <div>
          <Line options={options} data={data} />
        </div>
        <div>
          <Line options={options} data={data} />
        </div>
      </WrapperGraph>
    </ContainerMeasurements>
  )
}

export default Measurements
