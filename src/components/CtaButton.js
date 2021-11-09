import React from 'react'
import styled from 'styled-components'

function CtaButton({name}) {
    return (
        <CtaButtonStyled>
            {name}
        </CtaButtonStyled>
    )
}

const CtaButtonStyled = styled.div`
    text-transform: uppercase;
    display: inline-block;
    padding: 0.9rem 1.5rem;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all .4s ease-in-out;
    background: linear-gradient(120deg, rgb(241, 118, 116), rgb(132, 111, 244));
    &:nth-child(2){
        margin-left: 1.5rem;
    }

    &:hover{
        background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
        transition: all .4s ease-in-out;
    }
`

export default CtaButton