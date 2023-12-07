import styled from 'styled-components'

const Header = styled.header`
  background-color: var(--secondary);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 3rem;
  margin-bottom: 0.7rem;
  border-radius: 5px;
  border: 1px solid var(--tertiary);

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    gap: 0.5rem;
    padding: 0.6rem 0;
  }
`

const MainContent = styled.main`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 70%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const AsideSearch = styled.aside`
  background-color: var(--tertiary);
  display: flex;
  flex-direction: column;
  width: 30%;
  align-items: center;
  gap: 10px;
  color: black;
  padding: 1rem 2rem;
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const BoxExercise = styled.div`
  display: flex;
  background-color: var(--tertiary);
  border-radius: 1rem;
  padding: 10px;
  height: 120px;
  color: var(--primary);
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    gap: 0.5rem;
    width: 100%;
    padding: 0.5rem;
  }
`

const WrapperImage = styled.div`
  display: flex;
  width: 100px;
  height: 100px;

  img {
    width: 100%;
    height: 100%;
    min-width: 85px;
    border-radius: 1rem;
    object-fit: cover;
  }
`

const WrapperDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0 10px;
  width: 90%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

const ExerciseName = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid var(--primary);

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`

const ExerciseDescription = styled.p`
  font-size: 0.9rem;
  display: flex;
  width: 100%;
  gap: 0.3rem;

  /* De um elemento para o outro é colocado um divisor */
  span > span {
    &::before {
      content: '|';
      margin: 0 0.3rem;
    }
  }

  .muscles_secondary {
    display: inline-block;
    width: 60%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
    flex-direction: column;

    .muscles_secondary {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`

const FormGroup = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0 0.5rem;
`

const Input = styled.input`
  width: 180px;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid var(--tertiary);
  padding: 0 0.5rem;
`

const ButtonSearch = styled.button`
  background-color: var(--btn-selected);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: var(--tertiary);
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background-color: var(--tertiary);
    color: var(--primary);
  }
`

const Select = styled.select`
  width: 180px;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid var(--tertiary);
  padding: 0 0.5rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10px;

  opacity: ${({ $openModal }) => ($openModal ? '0.5' : '1')};
  pointer-events: ${({ $openModal }) => ($openModal ? 'none' : 'auto')};
`

export {
  Header,
  MainContent,
  Section,
  AsideSearch,
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
}
