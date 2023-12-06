import { ToastContainer, toast } from 'react-toastify'
import { useEffect, useState } from 'react'

import useAxios from '../../hooks/useAxios'
import Pagination from '../../components/Pagination'
import ManFront from '../../components/MuscleAnatomy/ManFront'
import ManBack from '../../components/MuscleAnatomy/ManBack'
import ModalExercise from '../../components/ModalExercise'

import {
  Header,
  MainContent,
  Section,
  AsideSearch,
  BoxExercise,
  WrapperImage,
  WrapperDescription,
  ExerciseName,
  ExerciseDescription,
  FormGroup,
  Input,
  ButtonSearch,
  Select,
  Container
} from './styles'

// ?type_exercise=&difficulty=&muscles_primary=&equipment=
// ?search=
const Exercises = () => {
  const { response, error, execute } = useAxios(null)
  const [page, setPage] = useState(1)
  const { response: responseExerciseId, execute: executeExerciseId } =
    useAxios(null)
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const handlePage = async page => {
    setPage(page)
    await execute({
      url: `/exercise/exercise?page=${page}`,
      method: 'get'
    })
  }

  useEffect(() => {
    if (error || response?.code !== 200) {
      toast.error(error)
      toast.error(
        response?.message === 'Request failed with status code 404'
          ? 'Não foi encontrado nenhum exercício'
          : response?.message
      )
    }
  }, [error, response?.code, response?.message])

  useEffect(() => {
    execute({
      url: `/exercise/exercise?page=${page}`,
      method: 'get'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(response)

  const handleExercise = async id => {
    await executeExerciseId({
      url: `/exercise/exercise/${id}`,
      method: 'get'
    })
    handleOpenModal()
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
      <Container $openModal={openModal}>
        <Header>
          <FormGroup>
            <Input type="text" id="id_search" name="search" />
            <ButtonSearch className="btn btn-default" type="submit">
              Buscar
            </ButtonSearch>
          </FormGroup>

          <FormGroup>
            <Select name="type_exercise" id="id_type_exercise">
              <option value="" selected="">
                Tipo de exercício
              </option>
              <option value="3">Alongamento</option>
              <option value="4">Calisténico</option>
              <option value="1">Cardio</option>
              <option value="2">Força</option>
            </Select>

            <Select name="difficulty" id="id_difficulty">
              <option value="" selected="">
                Dificuldade
              </option>
              <option value="2">Especialista</option>
              <option value="3">Intermediário</option>
              <option value="1">Principiante</option>
            </Select>

            <Select name="equipment" id="id_equipment" multiple="">
              <option value="" selected="">
                Equipamento
              </option>
              <option value="8">Banco</option>
              <option value="1">Barra</option>
              <option value="6">Barra SZ</option>
              <option value="5">Bola Suiça</option>
              <option value="11">Corda</option>
              <option value="7">Crossover</option>
              <option value="3">Haltere</option>
              <option value="9">Paralelas</option>
              <option value="2">Supino</option>
              <option value="4">Supino Inclinado</option>
              <option value="10">Voador</option>
            </Select>

            <ButtonSearch type="submit">Enviar</ButtonSearch>
          </FormGroup>
        </Header>

        <MainContent>
          <Section>
            {response?.data?.results?.map(exercise => (
              <BoxExercise
                key={exercise.id}
                onClick={() => handleExercise(exercise.id)}
              >
                <WrapperImage>
                  <img
                    src={exercise.images[0].image}
                    alt={exercise.images[0].description}
                  />
                </WrapperImage>
                <WrapperDescription>
                  <ExerciseName>{exercise.name}</ExerciseName>
                  <ExerciseDescription>
                    <strong>Equipamento:</strong>
                    <span>
                      {exercise.equipment.length === 0
                        ? 'Sem equipamento'
                        : exercise.equipment.map(equipment => (
                            <span key={equipment.id}>{equipment.name}</span>
                          ))}
                    </span>
                  </ExerciseDescription>
                  <ExerciseDescription>
                    <strong>Músculos primários:</strong>
                    <span>
                      {exercise.muscles_primary.map(muscle_primary => (
                        <span key={muscle_primary.id}>
                          {muscle_primary.name}
                        </span>
                      ))}
                    </span>
                  </ExerciseDescription>
                  <ExerciseDescription>
                    <strong> Músculos secundários:</strong>
                    <span className="muscles_secondary">
                      {exercise.muscles_secondary.map(muscle_secondary => (
                        <span key={muscle_secondary.id}>
                          {muscle_secondary.name}
                        </span>
                      ))}
                    </span>
                  </ExerciseDescription>
                </WrapperDescription>
              </BoxExercise>
            ))}
          </Section>

          <AsideSearch>
            <h1>Buscar Exercícios</h1>
            <form action="">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ManFront width={'80%'} height={'100%'} />
                <ManBack width={'80%'} height={'100%'} />
              </div>
            </form>
          </AsideSearch>
        </MainContent>

        <Pagination page={page} handlePage={handlePage} response={response} />
      </Container>

      <ModalExercise
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        responseExerciseId={responseExerciseId}
        handleExercise={handleExercise}
      />
    </>
  )
}

export default Exercises
