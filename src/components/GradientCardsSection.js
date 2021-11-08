import React from 'react'
import styled from 'styled-components'
import MainTitle from './MainTitle'

function GradientCardsSection() {
    return (
        <GradientCardsSectionStyled>
            <div className="title-container">
                <MainTitle title={'Popular Blogs'} subtitle={'Our Top Blogs'}  paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil necessitatibus cum sit natus deleniti ratione fugit ea, officiis illo dolorem'} />
            </div>
        </GradientCardsSectionStyled>
    )
}

const GradientCardsSectionStyled = styled.div`
    margin: 30px 0;
`

export default GradientCardsSection
