// import { useState, useEffect } from 'react'
import styled from 'styled-components'

import ManFront from '../../components/MuscleAnatomy/ManFront'
import ManBack from '../../components/MuscleAnatomy/ManBack'

import useAxios from '../../hooks/useAxios'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const MuscleAnatomy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Home = () => {
  const { response, error, execute } = useAxios(null)

  return (
    <Container>
      <MuscleAnatomy>
        <ManBack />
        <ManFront />
      </MuscleAnatomy>
      {/* <FiltersExercise>

      </FiltersExercise> */}
    </Container>
  )
}

export default Home
