import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from '../axios'
import requests from '../Requests'
import Row from './Row'

const Rows = () => {

  return (
    <Container>
       <Row title = "Trending Now" fetchURL = {requests.fetchTrending} isLargeRow />
       <Row title = "Top Rated" fetchURL = {requests.fetchTopRated} />
       <Row title = "Comedy movies" fetchURL = {requests.fetchComedyMovies} />
       <Row title = "Horror movies" fetchURL = {requests.fetchHorrorMovies} />
       <Row title = "Romance Movies" fetchURL = {requests.fetchRomanceMovies} />
       {/* <Row title = "Documentaries" fetchURL = {requests.fetchDocumentaries} /> */}
    </Container>
  )
}

export default Rows

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-left: 30px;
    gap:30px;

    @media (min-width: 1200px){
        gap: 50px;
    }
`
