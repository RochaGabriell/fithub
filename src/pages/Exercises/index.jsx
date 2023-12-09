import { ToastContainer, toast } from 'react-toastify'
import { useEffect, useState } from 'react'

import useAxios from '../../hooks/useAxios'
import Pagination from '../../components/Pagination'
import ManFront from '../../components/MuscleAnatomy/ManFront'
import ManBack from '../../components/MuscleAnatomy/ManBack'
import ModalExercise from '../../components/ModalExercise'

import Calisthenics from '../../assets/TypeExercise/calisthenics.svg'
import Cardio from '../../assets/TypeExercise/cardio.svg'
import Stretching from '../../assets/TypeExercise/stretching.svg'
import Strength from '../../assets/TypeExercise/strength.svg'

import { ImageTypeExercise } from '../../components/ModalExercise/styles'
import {
  Header,
  MainContent,
  Section,
  AsideSearch,
  WrapperMuscleAnatomy,
  HeaderAside,
  BoxExercise,
  WrapperTitle,
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

const Exercises = () => {
  const { response, error, loading, execute } = useAxios(null)
  const [page, setPage] = useState(1)
  const { response: responseTypeExercise, execute: executeTypeExercise } =
    useAxios(null)
  const { response: responseDifficulty, execute: executeDifficulty } =
    useAxios(null)
  const { response: responseEquipment, execute: executeEquipment } =
    useAxios(null)
  const { response: responseMuscles, execute: executeMuscles } = useAxios(null)
  const [search, setSearch] = useState('')
  const [musclesPrimary, setMusclesPrimary] = useState('')
  const [typeExercise, setTypeExercise] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [equipment, setEquipment] = useState('')
  const { response: responseExerciseId, execute: executeExerciseId } =
    useAxios(null)
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const handlePage = async page => {
    setPage(page)
    await execute({
      url: `/exercise/exercise?
      ${search !== '' ? `search=${search}` : ''}
      ${musclesPrimary !== '' ? `&muscles_primary=${musclesPrimary}` : ''}
      ${typeExercise !== '' ? `&type_exercise=${typeExercise}` : ''}
      ${difficulty !== '' ? `&difficulty=${difficulty}` : ''}
      ${equipment !== '' ? `&equipment=${equipment}` : ''}&page=${page}`,
      method: 'get'
    })
  }

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
          ? 'Não foi encontrado nenhum exercício'
          : response?.message
      )
    }
    if (response?.data?.count === 0) {
      toast.error('Não foi encontrado nenhum exercício')
    }
  }, [error, response?.code, response?.data?.count, response?.message])

  useEffect(() => {
    execute({
      url: `/exercise/exercise?page=${page}`,
      method: 'get'
    })
    executeMuscles({
      url: '/exercise/muscle',
      method: 'get'
    })
    executeTypeExercise({
      url: '/exercise/type-exercise',
      method: 'get'
    })
    executeDifficulty({
      url: '/exercise/difficulty',
      method: 'get'
    })
    executeEquipment({
      url: '/exercise/equipment',
      method: 'get'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleExercise = async id => {
    await executeExerciseId({
      url: `/exercise/exercise/${id}`,
      method: 'get'
    })
    handleOpenModal()
  }

  const handleSearch = async e => {
    e.preventDefault()
    setSearch(e.target.search.value)

    if (e.target.search.value === '') {
      await execute({
        url: `/exercise/exercise?page=${page}`,
        method: 'get'
      })
    } else {
      await execute({
        url: `/exercise/exercise?search=${e.target.search.value}`,
        method: 'get'
      })
    }

    e.target.search.value = ''
  }

  const handleFilter = async e => {
    e.preventDefault()
    setMusclesPrimary(e.target.muscles.value)
    setTypeExercise(e.target.type_exercise.value)
    setDifficulty(e.target.difficulty.value)
    setEquipment(e.target.equipment.value)

    await execute({
      url: `/exercise/exercise?${
        e.target.muscles.value !== ''
          ? `muscles_primary=${e.target.muscles.value}`
          : ''
      }${
        e.target.type_exercise.value !== ''
          ? `&type_exercise=${e.target.type_exercise.value}`
          : ''
      }${
        e.target.difficulty.value !== ''
          ? `&difficulty=${e.target.difficulty.value}`
          : ''
      }${
        e.target.equipment.value !== ''
          ? `&equipment=${e.target.equipment.value}`
          : ''
      }`,
      method: 'get'
    })
  }

  const handleMuscle = async id => {
    await execute({
      url: `/exercise/exercise?${id !== '' ? `muscles_primary=${id}` : ''}`,
      method: 'get'
    })
    setMusclesPrimary(id)
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
          <FormGroup onSubmit={handleSearch}>
            <Input type="text" id="search" name="search" placeholder="Buscar" />
            <ButtonSearch type="submit">Buscar</ButtonSearch>
          </FormGroup>

          <FormGroup onSubmit={handleFilter}>
            <Select name="muscles" id="id_muscles" defaultValue="">
              <option value="">Músculos</option>
              {responseMuscles?.data?.map(muscle => (
                <option key={muscle.id} value={muscle.id}>
                  {muscle.name}
                </option>
              ))}
            </Select>

            <Select name="type_exercise" id="id_type_exercise" defaultValue="">
              <option value="">Tipo de exercício</option>
              {responseTypeExercise?.data?.map(typeExercise => (
                <option key={typeExercise.id} value={typeExercise.id}>
                  {typeExercise.name}
                </option>
              ))}
            </Select>

            <Select name="difficulty" id="id_difficulty" defaultValue="">
              <option value="">Dificuldade</option>
              {responseDifficulty?.data?.map(difficulty => (
                <option key={difficulty.id} value={difficulty.id}>
                  {difficulty.name}
                </option>
              ))}
            </Select>

            <Select name="equipment" id="id_equipment" defaultValue="">
              <option value="">Equipamento</option>
              {responseEquipment?.data?.map(equipment => (
                <option key={equipment.id} value={equipment.id}>
                  {equipment.name}
                </option>
              ))}
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
                  <WrapperTitle>
                    <ExerciseName>{exercise.name}</ExerciseName>
                    <ImageTypeExercise
                      style={
                        exercise?.difficulty === 1
                          ? { backgroundColor: '#1eb738' }
                          : exercise?.difficulty === 3
                          ? { backgroundColor: '#bda21b' }
                          : exercise?.difficulty === 2
                          ? { backgroundColor: 'var(--dif-advanced)' }
                          : null
                      }
                    >
                      {exercise?.type_exercise === 1 ? (
                        <img src={Cardio} alt="Cardio" />
                      ) : exercise?.type_exercise === 2 ? (
                        <img src={Strength} alt="Força" />
                      ) : exercise?.type_exercise === 3 ? (
                        <img src={Stretching} alt="Alongamento" />
                      ) : exercise?.type_exercise === 4 ? (
                        <img src={Calisthenics} alt="Calisténico" />
                      ) : null}
                    </ImageTypeExercise>
                  </WrapperTitle>
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
            <HeaderAside>
              <h2>Buscando pelo músculo:</h2>
              {responseMuscles?.data?.map(muscle =>
                muscle.id === parseInt(musclesPrimary) ? (
                  <span key={muscle.id}>{muscle.name}</span>
                ) : null
              )}
            </HeaderAside>
            <WrapperMuscleAnatomy>
              <ManFront
                width={'80%'}
                height={'100%'}
                musclesPrimary={musclesPrimary}
                handleMuscle={handleMuscle}
              />
              <ManBack
                width={'80%'}
                height={'100%'}
                musclesPrimary={musclesPrimary}
                handleMuscle={handleMuscle}
              />
            </WrapperMuscleAnatomy>
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
