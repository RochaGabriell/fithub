import { ToastContainer, toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'

import useAxios from '../../hooks/useAxios'
import Pagination from '../../components/Pagination'
import ManFront from '../../components/MuscleAnatomy/ManFront'
import ManBack from '../../components/MuscleAnatomy/ManBack'

import {
  Header,
  MainContent,
  Section,
  AsideSearch,
  BoxExercise,
  WrapperImage,
  WrapperDescription,
  FormGroup,
  Input,
  ButtonSearch,
  Select,
  Container,
  MarkdownWrapper
} from './styles'

// ?type_exercise=&difficulty=&muscles_primary=&equipment=
// ?search=
const Exercises = () => {
  const { response, error, execute } = useAxios(null)
  const [page, setPage] = useState(1)

  const handlePage = page => {
    setPage(page)
    execute({
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
              <BoxExercise key={exercise.id}>
                <WrapperImage>
                  <img
                    src={exercise.images[0].image}
                    alt={exercise.images[0].description}
                  />
                </WrapperImage>
                <WrapperDescription>
                  <p>
                    <strong>{exercise.name}</strong>
                  </p>
                  <p>
                    <strong>Equipamento:</strong>
                    <span>
                      {exercise.equipment.map(equipment => (
                        <span key={equipment.id} style={{ marginLeft: '5px' }}>
                          {equipment.name}
                        </span>
                      ))}
                    </span>
                  </p>
                  <p>
                    <strong>Músculos primários:</strong>
                    <span>
                      {exercise.muscles_primary.map(muscle_primary => (
                        <span
                          key={muscle_primary.id}
                          style={{ marginLeft: '5px' }}
                        >
                          {muscle_primary.name}
                        </span>
                      ))}
                    </span>
                  </p>
                  <p>
                    <strong> Músculos secundários:</strong>
                    <span>
                      {exercise.muscles_secondary.map(muscle_secondary => (
                        <span
                          key={muscle_secondary.id}
                          style={{ marginLeft: '5px' }}
                        >
                          {muscle_secondary.name}
                        </span>
                      ))}
                    </span>
                  </p>
                  {/* <MarkdownWrapper>
                    <Markdown>{exercise.instructions}</Markdown>
                  </MarkdownWrapper> */}
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
    </>
  )
}

export default Exercises
