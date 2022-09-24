import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from '../axios'
import requests from '../Requests'

const Rows = () => {


    //store movie data
    const [movies, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending)
            setMovie(request.data.results)
            console.log(request.data)
            return request
        }
        fetchData()
    },[])

  return (
    <Container>
        <div className='category'>Category One</div>

        {movies.map((movie)=>{
            return <Wrap>
            <img src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}/>
            </Wrap>
        })}

        <div className='category'>Category Two</div>
        <Wrap>
            <img src='https://i.ytimg.com/vi/AgS_6UbQ8JM/maxresdefault.jpg'/>
        </Wrap>
        <Wrap>
            <img src='https://i.ytimg.com/vi/AgS_6UbQ8JM/maxresdefault.jpg'/>
        </Wrap>
        
    </Container>
  )
}

export default Rows

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4,minmax(0,1fr));
    color: #e5e5e5;

    .category{
        grid-column: 1 / -1;
        font-size: 1.4vw;
        line-height: 1.25vw;
        font-weight: 700;
        margin-top: 30px;
        margin-bottom: 5px;
    }
    padding-left: 40px;
    grid-gap: 10px;
    margin-top: 10px;

    @media (min-width: 1200px){
        grid-template-columns: repeat(6,minmax(0,1fr));
    }
`

const Wrap = styled.div`
    overflow: hidden;
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`