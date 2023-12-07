import PropTypes from 'prop-types'

import {
  ContainerModal,
  ButtonCloseModal,
  HeaderModal,
  WrapperDescriptionModal
} from '../ModalWorkoutDay/styles'

const ModalDayExercise = ({
  openModalDayExercise,
  handleCloseModalDayExercise,
  dayExercises,
  handleExercise
}) => {
  return (
    <ContainerModal $openModal={openModalDayExercise}>
      <HeaderModal>
        <h1>Exercícios</h1>
        <ButtonCloseModal onClick={handleCloseModalDayExercise}>
          X
        </ButtonCloseModal>
      </HeaderModal>
      <WrapperDescriptionModal>
        <table>
          <thead>
            <tr>
              <th>Exercício</th>
              <th>Séries</th>
              <th>Repetições</th>
              <th>Peso</th>
            </tr>
          </thead>
          {dayExercises?.map(dayExercise => (
            <tbody key={dayExercise.id}>
              <tr onClick={() => handleExercise(dayExercise.exercise)}>
                <td>{dayExercise.exercisesDetails.name}</td>
                <td>{dayExercise.series}</td>
                <td>{dayExercise.repetitions}</td>
                <td>{dayExercise.weight}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </WrapperDescriptionModal>
    </ContainerModal>
  )
}

ModalDayExercise.propTypes = {
  openModalDayExercise: PropTypes.bool.isRequired,
  handleCloseModalDayExercise: PropTypes.func.isRequired,
  dayExercises: PropTypes.array,
  handleExercise: PropTypes.func.isRequired
}

export default ModalDayExercise
