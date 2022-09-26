import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'
import Banner from './Banner'
import Rows from './Rows'

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
