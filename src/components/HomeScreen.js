import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'
import Banner from './Banner'

const HomeScreen = () => {
  return (
    <Container>
      {/* Navbar */}
      <NavBar/>
      <Banner/>
      {/* Row Container */}
    </Container>
  )
}

export default HomeScreen

const Container = styled.div`
    height: 100vh;
`
