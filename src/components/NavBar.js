import {React, useEffect, useState} from 'react'
import styled from 'styled-components'
import '../App.css'

const NavBar = () => {

    const [show, setShow] = useState(false);
    
    const handleShow = () => {
        if(window.scrollY > 7){
            setShow(true)
        } else{
            setShow(false)
 
        }
    }

    useEffect(()=>{
      window.addEventListener("scroll", handleShow)
      return () => window.removeEventListener("scroll", handleShow)
    },[])

  return (
    <Nav className={show ? 'navbar-colorchange' : 'navbar'}>
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