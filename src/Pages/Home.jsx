import React from 'react'
import styled from 'styled-components'
import About from '../Components/About'
import Contact from '../Components/Contact'
import HomeSlider from '../Components/HomeSlider'
import Lines from '../Components/Lines'
import Map from '../Components/Map'
import Services from '../Components/Services'
import Sidepanel from '../Components/Sidepanel'
import Team from '../Components/Team'

const Home = () => {
    return (
        <>
        <Lines />
        <HomeSection>
            <HomeSlider />
            <Sidepanel />
        </HomeSection>
        <Section id="about">
            <About />
        </Section>
        <Section id="services">
            <Services />
        </Section>
        <Section>
            <Team />
        </Section>
        <Section id="contact">
            <Contact />
        </Section>
        <Section>
            <Map />
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
