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
    margin: 0;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`

const ImageTypeExercise = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 40px;
  background-color: var(--btn-selected);
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    min-width: 45px;
    padding: 3px;
  }
`

const ButtonCloseModal = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 35px;
  background-color: var(--btn-selected);
  padding: 10px;
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const ModalImage = styled.div`
  display: flex;
  width: 300px;
  max-width: 100%;
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

  span > span {
    &::before {
      content: '|';
      margin: 0 0.3rem;
    }
  }

  .muscles_secondary {
    display: flex;
    flex-wrap: wrap;
  }
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
  flex-wrap: wrap;
  gap: 10px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 30px;
    background-color: var(--btn-selected);
    color: var(--secondary);
    border-radius: 5px;
    cursor: pointer;
    padding: 1rem 0.5rem;

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

export {
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
}
