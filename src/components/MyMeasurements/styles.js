import styled from 'styled-components'

import { Container, Wrapper } from '../../pages/Auth/styles'

const ContainerMeasurements = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 200px 1fr;
  padding: 0 15px;
  width: 100%;
  margin: 0 auto;

  #higher {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  #graph {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  #informations {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }

  #bottom {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }

  @media screen and (max-width: 1124px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;

    #higher {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    #graph {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }

    #bottom {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    #informations {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
  }

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;

    #informations {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    #higher {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    #bottom {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }

    #graph {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
    }
  }
`

const WrapperBox = styled(Wrapper)`
  background-color: transparent;
  padding: 10px;
  min-width: 400px;
  width: 100%;
  gap: 10px;

  div {
    background-color: var(--tertiary);
    width: 100%;
    border-radius: 10px;
    padding: 10px 5px;
    text-align: center;

    .actions {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;

      a {
        background-color: var(--btn-selected);
        text-decoration: none;
        color: var(--tertiary);
        width: 100%;
        padding: 5px;
        border-radius: 5px;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
          background: var(--tertiary);
          color: var(--btn-selected);
        }
      }

      .btn-delete {
        background-color: var(--btn-red);
      }

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }
    }
  }

  .headerCard {
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 768px) {
      h1 {
        display: flex;
        flex-direction: column;
      }
    }
  }

  @media screen and (max-width: 768px) {
    min-width: 200px;
  }
`

const WrapperData = styled.div`
  display: flex;
  justify-content: space-between;

  label {
    width: max-content;
    padding: 10px;

    @media screen and (max-width: 768px) {
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  div {
    width: max-content;
    height: 100%;
  }
`

export { ContainerMeasurements, WrapperBox, WrapperData }
