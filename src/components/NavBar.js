import {React, useEffect, useState} from 'react'
import styled from 'styled-components'

const NavBar = () => {

    const [show, setShow] = useState(true);
    
    const handleShow = () => {
        if(window.scrollY > 9){
            setShow(true)
            console.log(show)
        } else{
            setShow(false)
            console.log(show)
        }
    }

    useEffect(()=>{
      window.addEventListener("scroll", handleShow)
      return () => window.removeEventListener("scroll", handleShow)
    },[])

  return (
    <Nav>
      <LeftContainer>
        <Logo>
            <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='netflix logo'/>
        </Logo>
        <Menu>
         
        </Menu>
      </LeftContainer>
      <RightContainer>

      </RightContainer>
    </Nav>
  )
}

export default NavBar

const Nav = styled.div`
    width: 100vw;
    height: 41px;
    position: fixed;
    background-color: ${({show}) => show ? 'red' : 'rgb(20, 20, 20)'};
    /* background-color: rgb(20, 20, 20); */
    /* background-image: linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent); */
    display: flex;
    align-items: center;
`

const LeftContainer = styled.div``

const RightContainer = styled.div``

const Logo = styled.div`
    width: 80px;
    margin-left: 35px;
    cursor: pointer;
    img{
        height: 100%;
        width: 100%;
    }
`

const Menu = styled.div`
    span{
        color: white;
    }
`