import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import useAxios from '../../hooks/useAxios'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

import { ContainerMeasurements, WrapperBox, WrapperData } from './styles'

const MyMeasurements = () => {
  const { response, error, execute } = useAxios(null)
  const labels = [
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
  ]

  const getDateFormat = date => {
    const dateObj = new Date(date)
    const day = dateObj.getDate()
    const month = dateObj.getMonth() + 1
    const year = dateObj.getFullYear()

    return `${day}/${month}/${year}`
  }

  const getBmi = (weight, height) => {
    const heightInMeters = height / 100
    const bmi = weight / (heightInMeters * heightInMeters)
    const status =
      bmi < 18.5
        ? 'Abaixo do peso'
        : bmi >= 18.5 && bmi <= 24.9
        ? 'Peso normal'
        : bmi >= 25 && bmi <= 29.9
        ? 'Excesso de peso'
        : bmi >= 30
        ? 'Obesidade'
        : 'Não foi possível calcular'

    return { status, value: bmi }
  }

  const getRcq = (waist, hip) => {
    const rcq = waist / hip
    const status =
      rcq < 0.85
        ? 'Baixo Risco'
        : rcq >= 0.85 && rcq <= 0.9
        ? 'Risco Moderado'
        : rcq > 0.9
        ? 'Alto Risco'
        : 'Não foi possível calcular'

    return { status, value: rcq }
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
      url: '/account/measurements-by-user',
      method: 'get'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const optionsWeight = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Peso'
      }
    }
  }

  const getBmcAndRcq = () => {
    if (!response || !response.data || !Array.isArray(response.data)) {
      return null
    }

    const height = response?.data
      .map(item => item.height)
      .slice(-12)
      .reverse()
    const weight = response?.data
      .map(item => item.weight)
      .slice(-12)
      .reverse()
    const waist = response?.data
      .map(item => item.waist)
      .slice(-12)
      .reverse()
    const hip = response?.data
      .map(item => item.hip)
      .slice(-12)
      .reverse()

    const bmi = weight.map((item, index) => {
      const heightInMeters = height[index] / 100
      const bmi = item / (heightInMeters * heightInMeters)
      return bmi.toFixed(2)
    })

    const rcq = waist.map((item, index) => {
      const rcq = item / hip[index]
      return rcq.toFixed(2)
    })

    return { bmi, rcq }
  }

  console.log(getBmcAndRcq())

  const dataWeight = {
    labels: labels,
    datasets: [
      {
        label: 'Peso',
        data: response?.data
          .map(item => item.weight)
          .slice(-12)
          .reverse(),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  }

  const optionsBmc = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'IMC'
      }
    }
  }

  const dataBmi = {
    labels: labels,
    datasets: [
      {
        label: 'IMC',
        data: getBmcAndRcq()?.bmi,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  }

  const optionsRcq = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'RCQ'
      }
    }
  }

  const dataRcq = {
    labels: labels,
    datasets: [
      {
        label: 'RCQ',
        data: getBmcAndRcq()?.rcq,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  }

  return (
    <>
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
      <ContainerMeasurements>
        <WrapperBox id="higher">
          <div>
            {response?.message === 'Request failed with status code 404' ? (
              <h1>Você não possui medidas cadastradas</h1>
            ) : (
              <h1>Medidas - Superiores</h1>
            )}
          </div>
          <div>
            <WrapperData>
              <label htmlFor="weight">Peso</label>
              <div>{response?.data[0]?.weight || ''}</div>
            </WrapperData>
            <WrapperData>
              <label htmlFor="height">Altura</label>
              <div>{response?.data[0]?.height || ''}</div>
            </WrapperData>
            <WrapperData>
              <label htmlFor="shoulder">Ombro</label>
              <div>{response?.data[0]?.shoulder || ''}</div>
            </WrapperData>
            <WrapperData>
              <label htmlFor="chest">Peito</label>
              <div>{response?.data[0]?.chest || ''}</div>
            </WrapperData>
            <WrapperData>
              <label htmlFor="right_arm">Braço direito</label>
              <div>{response?.data[0]?.right_arm || ''}</div>
            </WrapperData>
            <WrapperData>
              <label htmlFor="left_arm">Braço esquerdo</label>
              <div>{response?.data[0]?.left_arm || ''}</div>
            </WrapperData>
            <WrapperData>
              <label htmlFor="right_forearm">Antebraço direito</label>
              <div>{response?.data[0]?.right_forearm || ''}</div>
            </WrapperData>
            <WrapperData>
              <label htmlFor="left_forearm">Antebraço esquerdo</label>
              <div>{response?.data[0]?.left_forearm || ''}</div>
            </WrapperData>
            <WrapperData>
              <label htmlFor="right_fist">Punho direito</label>
              <div>{response?.data[0]?.right_fist || ''}</div>
            </WrapperData>
            <WrapperData>
              <label htmlFor="left_fist">Punho esquerdo</label>
              <div>{response?.data[0]?.left_fist || ''}</div>
            </WrapperData>
            <WrapperData>
              <label htmlFor="waist">Cintura</label>
              <div>{response?.data[0]?.waist || ''}</div>
            </WrapperData>
            <WrapperData>
              <label htmlFor="abdomen">Abdômen</label>
              <div>{response?.data[0]?.abdomen || ''}</div>
            </WrapperData>
          </div>
        </WrapperBox>

        <WrapperBox id="graphics">
          <div>
            <h1>Gráficos</h1>
          </div>
          <div>
            <Line options={optionsWeight} data={dataWeight} />
          </div>
          <div>
            <Line options={optionsBmc} data={dataBmi} />
          </div>
          <div>
            <Line options={optionsRcq} data={dataRcq} />
          </div>
        </WrapperBox>

        <WrapperBox id="informations">
          <div>
            <h1>Informativos</h1>
          </div>
          <WrapperData>
            <label htmlFor="ibm">
              <strong>IMC</strong> -{' '}
              {getBmi(
                response?.data[0]?.weight,
                response?.data[0]?.height
              )?.value?.toFixed(2) || ''}
            </label>
            <div
              style={{
                backgroundColor:
                  getBmi(response?.data[0]?.weight, response?.data[0]?.height)
                    ?.status === 'Abaixo do peso'
                    ? 'blue'
                    : getBmi(
                        response?.data[0]?.weight,
                        response?.data[0]?.height
                      )?.status === 'Peso normal'
                    ? 'green'
                    : getBmi(
                        response?.data[0]?.weight,
                        response?.data[0]?.height
                      )?.status === 'Excesso de peso'
                    ? 'orange'
                    : getBmi(
                        response?.data[0]?.weight,
                        response?.data[0]?.height
                      )?.status === 'Obesidade'
                    ? 'red'
                    : ''
              }}
            >
              {getBmi(response?.data[0]?.weight, response?.data[0]?.height)
                ?.status || ''}
            </div>
          </WrapperData>
          <WrapperData>
            <label htmlFor="rcq">
              <strong>RCQ</strong> -{' '}
              {getRcq(
                response?.data[0]?.waist,
                response?.data[0]?.hip
              )?.value?.toFixed(2) || ''}
            </label>
            <div
              style={{
                backgroundColor:
                  getRcq(response?.data[0]?.waist, response?.data[0]?.hip)
                    ?.status === 'Baixo Risco'
                    ? 'orange'
                    : getRcq(response?.data[0]?.waist, response?.data[0]?.hip)
                        ?.status === 'Risco Moderado'
                    ? 'green'
                    : getRcq(response?.data[0]?.waist, response?.data[0]?.hip)
                        ?.status === 'Alto Risco'
                    ? 'red'
                    : ''
              }}
            >
              {getRcq(response?.data[0]?.waist, response?.data[0]?.hip)
                ?.status || ''}
            </div>
          </WrapperData>
        </WrapperBox>

        <WrapperBox id="bottom">
          <div>
            {response?.message === 'Request failed with status code 404' ? (
              <h1>Você não possui medidas cadastradas</h1>
            ) : (
              <h1>Medidas - Inferiores</h1>
            )}
          </div>
          <div>
            <WrapperData>
              <label htmlFor="hip">Quadril</label>
              <div>{response?.data[0]?.hip || ''}</div>
            </WrapperData>
            <WrapperData>
              <label htmlFor="right_thigh">Coxa direita</label>
              <div>{response?.data[0]?.right_thigh || ''}</div>
            </WrapperData>
            <WrapperData>
              <label htmlFor="left_thigh">Coxa esquerda</label>
              <div>{response?.data[0]?.left_thigh || ''}</div>
            </WrapperData>
            <WrapperData>
              <label htmlFor="right_calf">Panturrilha direita</label>
              <div>{response?.data[0]?.right_calf || ''}</div>
            </WrapperData>
            <WrapperData>
              <label htmlFor="left_calf">Panturrilha esquerda</label>
              <div>{response?.data[0]?.left_calf || ''}</div>
            </WrapperData>
            <WrapperData>
              <label htmlFor="created_at">Data de medição</label>
              <div>{getDateFormat(response?.data[0]?.created_at) || ''}</div>
            </WrapperData>
          </div>
        </WrapperBox>
      </ContainerMeasurements>
    </>
  )
}

export default MyMeasurements
