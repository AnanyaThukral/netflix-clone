import { NotificationsActive } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from '../axios'

const Row = ({title, fetchURL, isLargeRow}) => {

    //store movie data
    const [movies, setMovie] = useState([]);
    const url ='https://image.tmdb.org/t/p/w500/'

    useEffect(()=>{
       async function fetchData(){
        const request = await axios.get(fetchURL)
        setMovie(request.data.results)
        return request
       }
       fetchData()
    },[])

  return (
    <Container>
      <h1>{title}</h1>
      <Wrapper>    
      {movies.map((movie)=>(   
            <img className = {`${isLargeRow && 'row_poster_large'}`} src = {`${url}${
                isLargeRow ? movie.poster_path : movie?.backdrop_path
            }`}/>
        ))}
      </Wrapper>
    </Container>
  )
}

export default Row

const Container = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        color: #e5e5e5;
        font-size: 1.4vw;
        line-height: 1.25vw;
        margin-bottom: 10px;
    }
`

const Wrapper = styled.div`
    display: flex;
    gap: 5px;

    img{
        max-height: 100px;
        object-fit: contain;
        width: 100%;
        transition: transform 450ms;
        &:hover{
            transform: scale(1.08);
            opacity: 1;
        }       
    }
 
     overflow-x: scroll ;
     &::-webkit-scrollbar { width: 0 !important}
     /* &::-webkit-scrollbar {display: none !important}; */
    
`