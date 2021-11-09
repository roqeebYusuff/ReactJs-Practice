import React from 'react'
import styled from 'styled-components'
import BlogSection from './BlogSection'
import COntactSection from './COntactSection'
import DemonstrationSection from './DemonstrationSection'
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
            <DemonstrationSection />
            <COntactSection />
            <footer>
                <p>Copyright &copy;Roqeeb. All Rights Reserved</p>
            </footer>
        </BodyContentStyled>
    )
}

const BodyContentStyled = styled.main`
    
    .sellercards{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        margin: 2rem 0;
    }
    footer{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem 0;
        background-color: #020a27;
        border-top: 1px solid rgba(255, 255, 255, .08);
        p{
            opacity: 0.7;
            text-align: center;
        }
    }
`

export default BodyContent
