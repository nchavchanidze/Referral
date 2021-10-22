import React from 'react'
import styled from 'styled-components'
import HomeSlider from '../Components/HomeSlider'
import Sidepanel from '../Components/Sidepanel'

const Home = () => {
    return (
        <HomeSection>
            <HomeSlider />
            <Sidepanel />
        </HomeSection>
    )
}

const HomeSection = styled.section`
    height: 929px;
    position: relative;
` 

export default Home
