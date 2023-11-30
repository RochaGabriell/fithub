import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import useAxios from '../../hooks/useAxios'

import {
  Wrapper,
  WrapperTop,
  Form,
  WrapperInput,
  WrapperBirthDateSex
  // SelectSex,
  // BtnSubmit
} from '../Auth/styles'

const Profile = () => {
  const { response, error, loading, execute } = useAxios()
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    birth_date: '',
    sex: '',
    show_age: 0
  })

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])

  useEffect(() => {
    if (loading) {
      toast.info('Carregando...')
    } else {
      toast.dismiss()
    }
  }, [loading])

  useEffect(() => {
    execute({
      url: '/account/profile/',
      method: 'get'
    })
  }, [])

  useEffect(() => {
    if (response) {
      setUserData(response.data)
    }
  }, [response])

  const handleSaveClick = async e => {
    e.preventDefault()
    // Um dia eu termino essa bomba
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  return (
    <Wrapper>
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
      <WrapperTop>
        <div>
          <h1>Perfil</h1>
          <span>{userData.name}</span>
        </div>
      </WrapperTop>
      <Form onSubmit={handleSaveClick}>
        <WrapperInput>
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome Completo"
            value={userData.name}
            onChange={handleInputChange}
            readOnly
          />
        </WrapperInput>
        <WrapperInput>
          <label htmlFor="username">Nome de Usuário</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Nome de Usuário"
            value={userData.username}
            onChange={handleInputChange}
            readOnly
          />
        </WrapperInput>
        <WrapperInput>
          <label htmlFor="email">Endereço de Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Endereço de Email"
            value={userData.email}
            onChange={handleInputChange}
            readOnly
          />
        </WrapperInput>
        <WrapperBirthDateSex style={{ gap: '1rem' }}>
          <WrapperInput>
            <label htmlFor="birthDate">Nascimento</label>
            {/* <input
              type="date"
              name="birthDate"
              id="birthDate"
              placeholder="Data de Nascimento"
              value={userData.birth_date}
              onChange={handleInputChange}
            /> */}
            <input
              type="text"
              name="birth_date"
              id="birthDate"
              value={userData.birth_date}
              readOnly
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="showAge">Idade</label>
            <input
              type="text"
              name="show_age"
              id="showAge"
              value={userData.show_age}
              readOnly
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="sex">Sexo</label>
            {/* <SelectSex
              name="sex"
              id="sex"
              value={userData.sex}
              onChange={handleInputChange}
            >
              <option value="">Sexo</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </SelectSex> */}
            <input
              type="text"
              name="sex"
              id="sex"
              value={userData.sex}
              readOnly
            />
          </WrapperInput>
        </WrapperBirthDateSex>
        {/* <BtnSubmit type="submit">Salvar</BtnSubmit> */}
      </Form>
    </Wrapper>
  )
}

export default Profile
