import PropTypes from 'prop-types'
import Markdown from 'react-markdown'

import Calisthenics from '../../assets/TypeExercise/calisthenics.svg'
import Cardio from '../../assets/TypeExercise/cardio.svg'
import Stretching from '../../assets/TypeExercise/stretching.svg'
import Strength from '../../assets/TypeExercise/strength.svg'

import {
  Container,
  Header,
  ImageTypeExercise,
  ButtonCloseModal,
  ContainerModal,
  ModalImage,
  WrapperDescriptionModal,
  ExerciseDescriptionModal,
  Difficulty,
  WrapperVariation,
  MarkdownWrapper
} from './styles'

const ModalExercise = ({
  openModal,
  handleCloseModal,
  responseExerciseId,
  handleExercise
}) => {
  const typeExercise = {
    1: 'Cardio',
    2: 'Força',
    3: 'Alongamento',
    4: 'Calisténico'
  }

  return (
    <Container $openModal={openModal}>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '10px'
        }}
      >
        <ImageTypeExercise>
          {responseExerciseId?.data?.type_exercise === 1 ? (
            <img src={Cardio} alt="Cardio" />
          ) : responseExerciseId?.data?.type_exercise === 2 ? (
            <img src={Strength} alt="Força" />
          ) : responseExerciseId?.data?.type_exercise === 3 ? (
            <img src={Stretching} alt="Alongamento" />
          ) : responseExerciseId?.data?.type_exercise === 4 ? (
            <img src={Calisthenics} alt="Calisténico" />
          ) : null}
        </ImageTypeExercise>
        <h1>{responseExerciseId?.data?.name}</h1>
        <ButtonCloseModal onClick={handleCloseModal}>X</ButtonCloseModal>
      </Header>

      <ContainerModal>
        <ModalImage>
          <img
            src={responseExerciseId?.data?.images[0].image}
            alt={responseExerciseId?.data?.images[0].description}
          />
        </ModalImage>

        <WrapperDescriptionModal>
          <ExerciseDescriptionModal>
            <strong>Tipo</strong>
            <span>{typeExercise[responseExerciseId?.data?.type_exercise]}</span>
          </ExerciseDescriptionModal>
          <ExerciseDescriptionModal>
            <strong>Equipamento</strong>
            <span>
              {responseExerciseId?.data?.equipment.length === 0
                ? 'Sem equipamento'
                : responseExerciseId?.data?.equipment.map(equipment => (
                    <span key={equipment.id}>{equipment.name}</span>
                  ))}
            </span>
          </ExerciseDescriptionModal>
          <ExerciseDescriptionModal>
            <strong>Músculos primários</strong>
            <span>
              {responseExerciseId?.data?.muscles_primary.map(muscle_primary => (
                <span key={muscle_primary.id}>{muscle_primary.name}</span>
              ))}
            </span>
          </ExerciseDescriptionModal>
          <ExerciseDescriptionModal>
            <strong> Músculos secundários</strong>
            <span className="muscles_secondary">
              {responseExerciseId?.data?.muscles_secondary.map(
                muscle_secondary => (
                  <span key={muscle_secondary.id}>{muscle_secondary.name}</span>
                )
              )}
            </span>
          </ExerciseDescriptionModal>
          <ExerciseDescriptionModal>
            <strong>Dificuldade</strong>
            {responseExerciseId?.data?.difficulty === 1 ? (
              <Difficulty
                style={{
                  backgroundColor:
                    responseExerciseId?.data?.difficulty === 1
                      ? 'var(--dif-beginner)'
                      : 'var(--tertiary)'
                }}
              >
                Principiante
              </Difficulty>
            ) : responseExerciseId?.data?.difficulty === 3 ? (
              <Difficulty
                style={{
                  backgroundColor:
                    responseExerciseId?.data?.difficulty === 3
                      ? 'var(--dif-intermediate)'
                      : 'var(--tertiary)'
                }}
              >
                Intermediário
              </Difficulty>
            ) : responseExerciseId?.data?.difficulty === 2 ? (
              <Difficulty
                style={{
                  backgroundColor:
                    responseExerciseId?.data?.difficulty === 2
                      ? 'var(--dif-advanced)'
                      : 'var(--tertiary)'
                }}
              >
                Avançado
              </Difficulty>
            ) : null}
          </ExerciseDescriptionModal>
        </WrapperDescriptionModal>
      </ContainerModal>

      <h1>Instruções</h1>
      <MarkdownWrapper>
        <Markdown>{responseExerciseId?.data?.instructions}</Markdown>
      </MarkdownWrapper>

      <h1>Variante</h1>
      <WrapperVariation>
        {responseExerciseId?.data?.variations?.map(variation => (
          <span key={variation.id} onClick={() => handleExercise(variation.id)}>
            {variation.name}
          </span>
        ))}
      </WrapperVariation>
    </Container>
  )
}

ModalExercise.propTypes = {
  openModal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  responseExerciseId: PropTypes.object,
  handleExercise: PropTypes.func.isRequired
}

export default ModalExercise
