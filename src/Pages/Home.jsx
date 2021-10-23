import React from 'react'
import styled from 'styled-components'
import About from '../Components/About'
import HomeSlider from '../Components/HomeSlider'
import Sidepanel from '../Components/Sidepanel'

const Home = () => {
    return (
        <>
        <HomeSection>
            <HomeSlider />
            <Sidepanel />
        </HomeSection>
        <AboutSection>
            <About />
        </AboutSection>
        </>

    )
}

const HomeSection = styled.section`
    height: 929px;
    position: relative;
` 
const AboutSection = styled.section`
    position: relative;
    padding: 70px 0;
`

export default Home
