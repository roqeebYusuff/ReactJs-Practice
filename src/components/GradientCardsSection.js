import React from 'react'
import styled from 'styled-components'
import GradientCard from './GradientCard'
import MainTitle from './MainTitle'
import person from "../img/blog1.jpg"
import avatar from '../img/blog2.jpg'
import CtaButton from './CtaButton'

function GradientCardsSection() {
    return (
        <GradientCardsSectionStyled>
            <div className="title-container">
                <MainTitle title={'Discover Upcoming Items'} subtitle={'New Upcoming Items'}  paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil necessitatibus cum sit natus deleniti ratione fugit ea, officiis illo dolorem'} />
            </div>

            <div className="gradient-cards-conteiner">
                <GradientCard image={person} avatar={avatar} name={'@Jim Drury'} price={'0.067 ETH'} title={'Just a dummy title'} />
                <GradientCard image={person} avatar={avatar} name={'@Jim Drury'} price={'0.067 ETH'} title={'Just a dummy title'} />
                <GradientCard image={person} avatar={avatar} name={'@Jim Drury'} price={'0.067 ETH'} title={'Just a dummy title'} />
                <GradientCard image={person} avatar={avatar} name={'@Jim Drury'} price={'0.067 ETH'} title={'Just a dummy title'} />
                <GradientCard image={person} avatar={avatar} name={'@Jim Drury'} price={'0.067 ETH'} title={'Just a dummy title'} />
                <GradientCard image={person} avatar={avatar} name={'@Jim Drury'} price={'0.067 ETH'} title={'Just a dummy title'} />
                <GradientCard image={person} avatar={avatar} name={'@Jim Drury'} price={'0.067 ETH'} title={'Just a dummy title'} />
                <GradientCard image={person} avatar={avatar} name={'@Jim Drury'} price={'0.067 ETH'} title={'Just a dummy title'} />
            </div>
            <div className="cta-btn">
                <CtaButton name={'View More'} />
            </div>
        </GradientCardsSectionStyled>
    )
}

const GradientCardsSectionStyled = styled.div`
    margin: 50px 50px;
    /* margin: 30px 0; */
    .cta-btn{
        text-align: center;
        padding-top: 2rem;
    }
`

export default GradientCardsSection
