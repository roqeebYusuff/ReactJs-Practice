import React from 'react'
import styled from 'styled-components'
import SmallHeading from './SmallHeading'

function MainTitle({title, subtitle, paragraph}) {
    return (
        <MainTitleStyled>
            <SmallHeading title={subtitle} />
            <h2>
                {title}
            </h2>

            <p>
                {paragraph}
            </p>
        </MainTitleStyled>
    )
}

const MainTitleStyled = styled.div`
    h2{
        padding-top: .1rem;
        font-weight: 500;
    }
    p{
        padding: .2rem 0;
        opacity: .5;
    }
`

export default MainTitle