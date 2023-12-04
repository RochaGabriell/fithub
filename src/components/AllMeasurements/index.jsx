import useAxios from '../../hooks/useAxios'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import swal from 'sweetalert'

import {
  ContainerMeasurements,
  WrapperBox,
  WrapperData
} from '../MyMeasurements/styles'

import Pagination from '../Pagination'
import { Link } from 'react-router-dom'

const AllMeasurements = () => {
  const { response, error, execute } = useAxios(null)
  const [page, setPage] = useState(1)
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
  // eslint-disable-next-line no-unused-vars
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
    left_calf: ''
  })

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
      url: `/account/measurements-by-user?page=${page}`,
      method: 'get'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePage = page => {
    setPage(page)
    execute({
      url: `/account/measurements-by-user?page=${page}`,
      method: 'get'
    })
  }

  const confirmDelete = id => {
    swal({
      title: 'Tem certeza que deseja excluir?',
      text: 'Uma vez excluído, você não poderá recuperar esta medida!',
      icon: 'warning',
      buttons: true,
      dangerMode: true
    }).then(async willDelete => {
      if (willDelete) {
        try {
          await execute({
            url: `/account/measurements/${id}`,
            method: 'delete'
          })
          if (willDelete) {
            swal('Sua medida foi excluída com sucesso!', {
              icon: 'success'
            })
          }
          handlePage(1)
        } catch (error) {
          swal('Erro ao excluir a medida. Tente novamente!', {
            icon: 'error'
          })
        }
      } else {
        swal('Sua medida está segura!')
      }
    })
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
      <ContainerMeasurements style={{ gridTemplateRows: '1fr' }}>
        {response?.data?.results?.map(item => (
          <WrapperBox key={item.id}>
            <div className="headerCard">
              <h1>
                Medida - <span>{getDateFormat(item?.created_at) || ''}</span>
              </h1>
              <span className="actions">
                <Link to={`/measurements/form/${item.id}`} className="btn-edit">
                  Editar
                </Link>
                <a
                  className="btn-delete"
                  onClick={() => confirmDelete(item.id)}
                >
                  Excluir
                </a>
              </span>
            </div>
            <div>
              {Object.keys(data).map(
                (itemm, index) =>
                  itemm !== 'id' &&
                  itemm !== 'created_at' &&
                  itemm !== 'updated_at' && (
                    <WrapperData key={index}>
                      <label htmlFor={itemm}>{translations[itemm]}</label>
                      <div>{item[itemm] || ''}</div>
                    </WrapperData>
                  )
              )}
            </div>
          </WrapperBox>
        ))}
      </ContainerMeasurements>
      <Pagination page={page} handlePage={handlePage} response={response} />
    </>
  )
}

export default AllMeasurements
