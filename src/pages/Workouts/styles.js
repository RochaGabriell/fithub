import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 100%;

  opacity: ${({ $openModal }) => ($openModal ? '0.5' : '1')};
  pointer-events: ${({ $openModal }) => ($openModal ? 'none' : 'auto')};
`

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

  h1 {
    font-size: 1.5rem;
    color: var(--tertiary);
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    gap: 0.5rem;
    padding: 0.6rem 0;
  }
`

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;
  height: 100%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const SheetWorkout = styled.div`
  background-color: var(--tertiary);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--secondary);
  padding: 1rem;
  border-radius: 5px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;

      p {
        font-size: 0.8rem;
        padding: 0.2rem;
        border-radius: 5px;
        font-weight: bold;
        color: var(--secondary);
      }
    }
  }

  p {
    font-size: 0.9rem;
    text-align: justify;
  }

  &:hover {
    transition: 0.3s;
    opacity: 0.8;
    cursor: pointer;
  }
`

export { Container, Header, Main, SheetWorkout }
