import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'

const Profile = () => {
  return (
    <Container>
      {/* same nav styles as profile screen */}
      <NavBar screen = 'profile'/>
    </Container>
  )
}

export default Profile

const Container = styled.div``