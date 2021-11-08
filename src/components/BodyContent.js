import React from 'react'
import styled from 'styled-components'
import BlogSection from './BlogSection'
import GradientCardsSection from './GradientCardsSection'
import MainTitle from './MainTitle'
import SellerCard from './SellerCard'

function BodyContent() {
    return (
        <BodyContentStyled>
            <MainTitle title={'Top Sellers This Month'} subtitle={'All Entrepreneurs'} />

            <div className="sellercards">
                <SellerCard />
                <SellerCard />
                <SellerCard />
            </div>

            <BlogSection />
            <GradientCardsSection />
        </BodyContentStyled>
    )
}

const BodyContentStyled = styled.main`
    margin-top: 50px;
    margin: 0 50px;
    .sellercards{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        margin: 2rem 0;
    }
`

export default BodyContent
