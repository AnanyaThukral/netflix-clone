import React from 'react'
import styled from 'styled-components'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Banner = () => {
  return (
    <Container>
      <BannerContent>
        <BannerTitle>
            Movie Name
        </BannerTitle>
        <BannerDescription>
            Movie Description
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
    </Container>
  )
}

export default Banner

const Container = styled.div`
    position: relative;
    height: 448px;
    background-image: url('https://images.hindustantimes.com/img/2022/09/13/550x309/brahmastra_1662691373090_1663051350014_1663051350014.jpg');
    object-fit: contain;
    background-position: center center;
    background-size: cover;
    color: white;
    z-index: -1;
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