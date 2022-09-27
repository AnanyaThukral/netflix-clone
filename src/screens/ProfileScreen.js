import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'

const ProfileScreen = () => {
  return (
    <Container>
      {/* same nav styles as profile screen */}
      <NavBar screen = 'profile'/>
      <ProfileContainer>
        <h1>Edit Profile</h1>
        <div className='divider'></div>
        <Content>
          <ProfilePicture>
            <img src = 'https://occ-0-344-1007.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229'/>
          </ProfilePicture>
          <ProfileDetails>
            <EmailContainer></EmailContainer>
            <h2>Plans (Current Plan: premimum)</h2>
            <div className='divider'></div>
            <h3>Renewal date: 04/03/2021</h3>
            <Rows>
              <Row>
                <LeftContainer>
                  <h4>Netflix Standard</h4>
                  <h5>1080p</h5>
                </LeftContainer>
                <SubscribeButton></SubscribeButton>
              </Row>
              <Row>
                <LeftContainer>
                  <h4>Netflix Basic</h4>
                  <h5>1080p</h5>
                </LeftContainer>
                <SubscribeButton></SubscribeButton>
              </Row>
              <Row>
                <LeftContainer>
                  <h4>Netflix Premium</h4>
                  <h5>1080p</h5>
                </LeftContainer>
                <SubscribeButton></SubscribeButton>
              </Row>
            </Rows>
          </ProfileDetails>
        </Content>
      </ProfileContainer>
    </Container>
  )
}

export default ProfileScreen

const Container = styled.div``