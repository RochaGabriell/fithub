import PropTypes from 'prop-types'

import {
  ContainerModal,
  HeaderModal,
  WrapperDescriptionModal,
  ButtonCloseModal
} from './styles'

const ModalWorkoutDay = ({
  openModalWorkoutDay,
  handleCloseModalWorkoutDay,
  workoutDays,
  handleDayExercise
}) => {
  const weekdays = {
    1: 'Segunda-feira',
    2: 'Terça-feira',
    3: 'Quarta-feira',
    4: 'Quinta-feira',
    5: 'Sexta-feira',
    6: 'Sábado',
    7: 'Domingo'
  }

  return (
    <ContainerModal $openModal={openModalWorkoutDay}>
      <HeaderModal>
        <h1>Dias de treino</h1>
        <ButtonCloseModal onClick={handleCloseModalWorkoutDay}>
          X
        </ButtonCloseModal>
      </HeaderModal>

      <WrapperDescriptionModal>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Dia</th>
            </tr>
          </thead>
          {workoutDays?.map(workoutDay => (
            <tbody key={workoutDay.id}>
              <tr onClick={() => handleDayExercise(workoutDay.id)}>
                <td>{workoutDay.description}</td>
                <td>{weekdays[workoutDay.day]}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </WrapperDescriptionModal>
    </ContainerModal>
  )
}

ModalWorkoutDay.propTypes = {
  openModalWorkoutDay: PropTypes.bool.isRequired,
  handleCloseModalWorkoutDay: PropTypes.func.isRequired,
  workoutDays: PropTypes.array,
  handleDayExercise: PropTypes.func.isRequired
}

export default ModalWorkoutDay
