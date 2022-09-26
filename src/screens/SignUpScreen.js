import { createUserWithEmailAndPassword } from 'firebase/auth'
import {React, useRef} from 'react'
import styled from 'styled-components'
import { auth } from '../firebase'

const SignUpScreen = () => {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,emailRef.current.value,
      passwordRef.current.value).then((authUser)=>{
      console.log(authUser)
    }).catch(error => {
      alert(error.message)
    })
  }

  const signIn = (e) => {
    e.preventDefault();
  }

  return (
    <Container>
      <Content>
        <h1>Sign In</h1>
        <form>
          <input ref = {emailRef} type= 'email' placeholder='Email'></input>
          <input ref = {passwordRef} type= 'password' placeholder='Password'></input>
          <button type='submit' onClick={signIn} >Sign In</button>
          <Wrapper>
            <h3>New to netflix?</h3>
            <span onClick={register}>Sign up now.</span>
          </Wrapper>
        </form>
      </Content>
    </Container>
  )
}

export default SignUpScreen

const Container = styled.div`
    min-height: 430px;
    max-width: 370px;
    position: relative;
    z-index: 100;
    margin: 0 auto;
    background-color: rgba(0,0,0,.75);
    top: 30%;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  gap: 15px;
  form{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
  h1{
    color: white; 
  }
  input{
        padding: 25px 10px;
        outline-width: 0;
        border: none;
        height: 40px;
        width: 100%;
        border-radius: 4px;
    }
    button{
      padding: 16px 20px;
      background-color: #E50914;
      color: white;
      font-size: 1rem;
      border: none;
      cursor: pointer;
      font-weight: 600;
      border-radius: 4px;
      margin-top: 15px;
    }
    h3{
      color: #737373;
    }
    span{
      color: white;
      &:hover{
        cursor: pointer;
        text-decoration: underline;
      }
    }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
