import React from 'react'
import styled from 'styled-components'
import MainTitle from './MainTitle'
import person from "../img/blog1.jpg"
import avatar from '../img/blog2.jpg'
import CtaButton from './CtaButton'
import GradientCard from './GradientCard'

function DemonstrationSection() {
    const ctaButton = <CtaButton name={'Place Bid'} />
    return (
        <DemonstrationSectionStyled>
            <div className="title-container">
                <MainTitle title={'Live Demonstration'} subtitle={'Live Demonstration'}  paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil necessitatibus cum sit natus deleniti ratione fugit ea, officiis illo dolorem'} />
            </div>

            <div className="gradient-cards-conteiner">
                <GradientCard image={person} avatar={avatar} name={'@Jim Drury'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton} />
                <GradientCard image={person} avatar={avatar} name={'@Jim Drury'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton} />
                <GradientCard image={person} avatar={avatar} name={'@Jim Drury'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton} />
                <GradientCard image={person} avatar={avatar} name={'@Jim Drury'} price={'0.067 ETH'} title={'Just a dummy title'} ctaButton={ctaButton} />
            </div>
        </DemonstrationSectionStyled>
    )
}

const DemonstrationSectionStyled = styled.div`
    margin-top: 50px;
    margin: 0 50px;
    margin: 40px;
`

export default DemonstrationSection
