import {React, useState} from 'react'
import styled from 'styled-components'
import SignUpScreen from './SignUpScreen';

const LoginScreen = () => {

    //store email address
    const [signIn, setSignIn] = useState(false);

  return (
    <Container>
        <div className='LoginScreen_gradient'></div>
        <Wrapper>
        <Logo>
            <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='netflix logo'/>
        </Logo>
        <LoginButton onClick={()=> setSignIn(true)}>
            Sign In
        </LoginButton>
        </Wrapper>
        {signIn ? (
                <SignUpScreen/>
            ) : (
                <MainContent>
                <Title>Unlimited films, TV programmes and more.</Title>
                <Subtitle>Watch anywhere. Cancel anytime.</Subtitle>
                <Description>Ready to watch? Enter your email to create or restart your membership.</Description>
                <LoginInputContainer>
                    <form>
                        <input type='email' placeholder='Email address'></input>    
                        <button onClick={()=> setSignIn(true)}>Get Started</button>
                    </form>
                </LoginInputContainer>
                </MainContent>
            )}
    </Container>
  )
}

export default LoginScreen

const Container = styled.div`
    background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/45082c39-e6d5-4b02-8867-e38fe32ed3af/d5697487-9873-4730-b175-691bc9ac03de/CA-en-20220919-popsignuptwoweeks-perspective_alpha_website_small.jpg');
    background-size: cover;
    height: 100vh;
    position: relative;
`

const Logo = styled.div`
    width: 100px;
    height: 50px;
    margin-left: 35px;
    cursor: pointer;
    img{
        height: 100%;
        width: 100%;
    }

`

const LoginButton = styled.button`
    margin-right: 30px;
    background-color: #E50914;
    color: white;
    border: none;
    padding: 7px 17px;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
`

const Wrapper = styled.div`
    width: 100vw;
    height: 41px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    z-index: 100;
`
const MainContent = styled.div`
    z-index: 100;
    position: relative;
    color: white;
    top: 30%;
    padding: 20px;
    margin: 0 auto;
    /* max-width: 1000px; */
    text-align: center;
`
const Title = styled.h1`
    font-size: 3.125rem;
`
const Subtitle = styled.h3`
    font-size:1.625rem;
    font-weight: 400;
    margin: 1rem auto;
`
const Description = styled.h3`
    font-weight: 400;
    padding: 0 10%;
    margin: 0 auto;
`
const LoginInputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    height: 40px;
    form {
        max-width: 550px;
        width: 100%;
    }
    input{
        padding: 25px 10px;
        outline-width: 0;
        border: none;
        height: 40px;
        width: 60%
    }
    button{
      padding: 16px 20px;
      background-color: #E50914;
      color: white;
      font-size: 1rem;
      border: none;
      cursor: pointer;
      font-weight: 600;
    }
`


