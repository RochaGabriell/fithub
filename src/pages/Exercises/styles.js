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
  height: 110px;
  color: var(--primary);
`

const WrapperImage = styled.div`
  display: flex;
  width: 100px;

  img {
    width: 100%;
    border-radius: 1rem;
    object-fit: cover;
  }
`

const WrapperDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0 10px;
  width: 100%;
`

const FormGroup = styled.div`
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
`

const MarkdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--tertiary);
  color: var(--secondary);
  border-radius: 8px;
  height: 50px;

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
}