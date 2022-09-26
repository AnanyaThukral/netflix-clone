import {React, useEffect, useState} from 'react'
import styled from 'styled-components'
import '../App.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NavBar = ({screen}) => {

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
        <Menu className={screen==='profile' ? 'menu-remove' : ''}>
         <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>TV Shows</a></li>
            <li><a href='#'>Movies</a></li>
            <li><a href='#'>News & Popular</a></li>
            <li><a href='#'>My List</a></li>
            <li><a href='#'>Browse by Languages</a></li>
         </ul>
        </Menu>
      </LeftContainer>
      <RightContainer>
        <SearchIcon className= {screen === 'profile' ? 'menu-remove' : 'nav-icon'}/>
        <NotificationsIcon className = {screen === 'profile' ? 'menu-remove' : 'nav-icon'}/>
        <ProfilePicture>
            <img src = 'https://occ-0-344-1007.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229'></img>
        </ProfilePicture>
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
    justify-content: space-between;
    transition:  rgb(20, 20, 20) .4s;
`

const LeftContainer = styled.div`
    display: flex;
    align-items: center;
`

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
    margin-right: 30px;
`

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
    margin-left: 30px;
    ul{
        display: flex;
        list-style: none;
        gap: 20px;
    }
    li{
        font-size:12px;
        line-height: 1.2;
    }
    a{
        cursor: pointer;
        height: 100%;
        text-decoration: none;
        color: #e5e5e5;
        transition: #b3b3b3 .4s;
        &:hover{
            color: #b3b3b3;
        }
    }
`

const ProfilePicture = styled.div``