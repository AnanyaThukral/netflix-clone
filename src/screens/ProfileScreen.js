import {React, useRef} from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import {auth} from '../firebase'
import { signOut } from 'firebase/auth'

const ProfileScreen = () => {

  //get user from store
  const user = useSelector(selectUser);

  return (
    <Container>
      {/* same nav styles as profile screen */}
      <NavBar screen = 'profile'/>
      <ProfileContainer>
        <h1>Edit Profile</h1>
        <div>
          <hr/>
        </div>
        <Content>
          <ProfilePicture>
            <img src = 'https://occ-0-344-1007.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229'/>
          </ProfilePicture>
          <ProfileInfo>
            <EmailContainer>
             <input defaultValue={user.email}></input>
            </EmailContainer>
            <h3>Plans</h3>
            <p></p>
            <div>
              <hr/>
            </div>
            <button onClick={()=>{
              auth.signOut()
            }}>Sign Out</button>
          </ProfileInfo>
        </Content>
      </ProfileContainer>
    </Container>
  )
}

export default ProfileScreen

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`

const ProfileContainer = styled.div`
  position: relative;
  max-width: 900px;
  max-height: 500px;
  margin: 0 auto;
  top: 10%;
  padding: 20px;
  width: 100%;
  h1{
    color: white;
    font-size: 40px;
    font-weight: 400;
  }
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #282c2d;
    margin: 1em 0;
    padding: 0;
    max-width: 500px;
}

`
const ProfilePicture = styled.div`
  height: 80px;
  width: 80px;
  img{
    border-radius: 4px;
    max-height: 120px;
    max-width: 120px; 
    min-height: 80px;
    min-width: 80px;
    width: 100%;
  }
`
const Content = styled.div`
  display: flex;
`
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 20px;
  width: 100%;
  max-width: 400px;
  h3{
    color: white;
  }
  button{
      padding: 12px 15px;
      background-color: #E50914;
      color: white;
      font-size: 1rem;
      border: none;
      cursor: pointer;
      font-weight: 600;
  }
`
const EmailContainer = styled.div`
  background-color: gray;
  padding: 15px;
  font-size: 15px;
  padding-left: 20px;
  input{
    text-decoration: none;
    border: none;
    background-color: transparent;
    outline: none;
    resize: none;
    color: white;
  }
  &:focus{
    outline: none;
  }
`