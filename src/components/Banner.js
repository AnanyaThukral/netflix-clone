import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from '../axios'
import requests from '../Requests';

const Banner = () => {

    //store movie data
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)
            ])
            return request   
        }
        fetchData()
    },[])

    //truncate description text
    function truncate(string, n){
        return string.length > n ? string.substr(0, n-1) + '...' : string
    }

  return (
    <Container style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}")`
    }}>
      <BannerContent>
        <BannerTitle>
            {movie?.name || movie?.title || movie?.original_name}
        </BannerTitle>
        <BannerDescription>
           {truncate(movie?.overview || 'description being created..', 150)}
        </BannerDescription>
        <BannerButton>
            <PlayButton>
                <PlayArrowIcon/>
                <span>Play</span>
            </PlayButton>
            <MoreInfoButton>
                <InfoOutlinedIcon/>
                <span>More info</span>
            </MoreInfoButton>
        </BannerButton>
      </BannerContent>
      <BannerFadeContainer></BannerFadeContainer>
    </Container>
  )
}

export default Banner

const Container = styled.div`
    position: relative;
    height: 448px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    z-index: -1;

    @media (min-width: 768px){
        height: 100vh;
    }
`

const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-left: 30px;
    top: 0;
    padding-top: 140px;
    height: 300px;
`

const BannerTitle = styled.h1`
    font-size: 3rem;
    font-weight: 600;
`

const BannerDescription = styled.p`
    font-weight: 400;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
    width: 45rem;
    line-height: 1.3;
    font-size: 0.8rem;
    max-width: 360px;
    height: 60px;
`

const BannerButton = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const PlayButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: black;
    border-radius: 4px;
    padding-left: 0.7rem;
    padding-right: 1.0rem;
    opacity: 1;
    cursor: pointer;
    span{
        font-size: 1.0rem;
        line-height: 2.4rem;
        padding-left: 3px;
    }
    &:hover{
        color: red;
        background-color: #e6e6e6;
        transition: all 0.2s;
    }
`

const MoreInfoButton = styled(PlayButton)`
    background-color: rgba(109, 109, 110, 0.7);
    color: white;
`

const BannerFadeContainer = styled.div`
    position: absolute;
    height: 100px;
    background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111);
    bottom: 0;
`