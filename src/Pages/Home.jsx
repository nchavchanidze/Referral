import React from 'react'
import styled from 'styled-components'
import About from '../Components/About'
import HomeSlider from '../Components/HomeSlider'
import Services from '../Components/Services'
import Sidepanel from '../Components/Sidepanel'

const Home = () => {
    return (
        <>
        <HomeSection>
            <HomeSlider />
            <Sidepanel />
        </HomeSection>
        <Section>
            <About />
        </Section>
        <Section>
            <Services />
        </Section>
        </>

    )
}

const HomeSection = styled.section`
    height: 929px;
    position: relative;
` 
const Section = styled.section`
    position: relative;
    padding: 70px 0;
`

export default Home
