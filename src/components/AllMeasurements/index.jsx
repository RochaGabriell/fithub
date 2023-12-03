import useAxios from '../../hooks/useAxios'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import {
  ContainerMeasurements,
  WrapperBox,
  WrapperData
} from '../MyMeasurements/styles'

const AllMeasurements = () => {
  const { response, error, execute } = useAxios(null)

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
      url: '/account/measurements-by-user',
      method: 'get'
    })
  }, [])

  console.log(response)

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
      <ContainerMeasurements style={{ gridTemplateRows: '1fr' }}>
        {response?.data?.map(item => {
          return (
            <WrapperBox key={item.id}>
              <div>
                <h1>
                  Medida - <span>{getDateFormat(item?.created_at) || ''}</span>
                </h1>
              </div>
              <div>
                <WrapperData>
                  <label htmlFor="weight">Peso</label>
                  <div>{item?.weight || ''}</div>
                </WrapperData>
                <WrapperData>
                  <label htmlFor="height">Altura</label>
                  <div>{item?.height || ''}</div>
                </WrapperData>
                <WrapperData>
                  <label htmlFor="shoulder">Ombro</label>
                  <div>{item?.shoulder || ''}</div>
                </WrapperData>
                <WrapperData>
                  <label htmlFor="chest">Peito</label>
                  <div>{item?.chest || ''}</div>
                </WrapperData>
                <WrapperData>
                  <label htmlFor="right_arm">Braço direito</label>
                  <div>{item?.right_arm || ''}</div>
                </WrapperData>
                <WrapperData>
                  <label htmlFor="left_arm">Braço esquerdo</label>
                  <div>{item?.left_arm || ''}</div>
                </WrapperData>
                <WrapperData>
                  <label htmlFor="right_forearm">Antebraço direito</label>
                  <div>{item?.right_forearm || ''}</div>
                </WrapperData>
                <WrapperData>
                  <label htmlFor="left_forearm">Antebraço esquerdo</label>
                  <div>{item?.left_forearm || ''}</div>
                </WrapperData>
                <WrapperData>
                  <label htmlFor="right_fist">Punho direito</label>
                  <div>{item?.right_fist || ''}</div>
                </WrapperData>
                <WrapperData>
                  <label htmlFor="left_fist">Punho esquerdo</label>
                  <div>{item?.left_fist || ''}</div>
                </WrapperData>
                <WrapperData>
                  <label htmlFor="waist">Cintura</label>
                  <div>{item?.waist || ''}</div>
                </WrapperData>
                <WrapperData>
                  <label htmlFor="abdomen">Abdômen</label>
                  <div>{item?.abdomen || ''}</div>
                </WrapperData>
                <WrapperData>
                  <label htmlFor="hip">Quadril</label>
                  <div>{item?.hip || ''}</div>
                </WrapperData>
                <WrapperData>
                  <label htmlFor="right_thigh">Coxa direita</label>
                  <div>{item?.right_thigh || ''}</div>
                </WrapperData>
                <WrapperData>
                  <label htmlFor="left_thigh">Coxa esquerda</label>
                  <div>{item?.left_thigh || ''}</div>
                </WrapperData>
                <WrapperData>
                  <label htmlFor="right_calf">Panturrilha direita</label>
                  <div>{item?.right_calf || ''}</div>
                </WrapperData>
                <WrapperData>
                  <label htmlFor="left_calf">Panturrilha esquerda</label>
                  <div>{item?.left_calf || ''}</div>
                </WrapperData>
              </div>
            </WrapperBox>
          )
        })}
      </ContainerMeasurements>
    </>
  )
}

export default AllMeasurements
