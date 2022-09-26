import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Rows from '../components/Rows'

const HomeScreen = () => {
  return (
    <Container>
      <NavBar screen = 'home'/>
      <Banner/>
      <Rows/>
    </Container>
  )
}

export default HomeScreen

const Container = styled.div`
    height: 100vh;
`
