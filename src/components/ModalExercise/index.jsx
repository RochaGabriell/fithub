import PropTypes from 'prop-types'
import Markdown from 'react-markdown'

import styled from 'styled-components'

const Container = styled.div`
  display: ${({ $openModal }) => ($openModal ? 'block' : 'none')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 85%;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  z-index: 1000;
  overflow-y: scroll;
  background-color: var(--secondary);
  box-shadow: 0 0 10px var(--tertiary);

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--tertiary);
    border-radius: 4px;
  }

  h1 {
    font-size: 1.5rem;
    color: var(--tertiary);
    margin-bottom: 10px;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
    padding: 10px;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h1 {
    font-size: 2rem;
    color: var(--tertiary);
  }
`

const ButtonCloseModal = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: var(--tertiary);
  color: var(--secondary);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--btn-red);
    color: var(--tertiary);
  }
`

const ContainerModal = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`

const ModalImage = styled.div`
  display: flex;
  width: 300px;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    min-width: 85px;
    border-radius: 1rem;
    object-fit: cover;
  }
`

const WrapperDescriptionModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ExerciseDescriptionModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Difficulty = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  background-color: var(--btn-red);
  color: var(--secondary);
  border-radius: 5px;
`

const WrapperVariation = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30px;
    background-color: var(--btn-red);
    color: var(--secondary);
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: var(--tertiary);
      color: var(--secondary);
    }
  }
`

const MarkdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--tertiary);
  color: var(--secondary);
  border-radius: 8px;
  height: 300px;
  padding: 10px;
  overflow-y: scroll;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--secondary);
    border-radius: 4px;
    border: 1px solid var(--tertiary);
  }

  h1 {
    font-size: 24px;
    margin-bottom: 15 px;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 16px;
    text-align: justify;
  }

  ul,
  ol {
    margin-bottom: 16px;
    padding-left: 20px;
  }

  li {
    font-size: 16px;
    line-height: 1.5;

    p {
      margin-bottom: 8px;
    }
  }
`

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
  responseExerciseId: PropTypes.object.isRequired,
  handleExercise: PropTypes.func.isRequired
}

export default ModalExercise
