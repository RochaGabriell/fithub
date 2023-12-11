import { ToastContainer } from 'react-toastify'
import { Outlet } from 'react-router-dom'

import { Container, Header, Main, Button } from './styles'

const FormWorkoutPage = () => {
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

        <Main>
          <Outlet />
        </Main>
      </Container>
    </>
  )
}

export default FormWorkoutPage
