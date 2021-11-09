import React from 'react'
import styled from 'styled-components'

function COntactSection() {
    return (
        <COntactSectionStyled>
            <div className="contact-info">
                <h3 className="contact-title">
                    Contact Us
                </h3>
                <p>30 Futa West Gate, Akure</p>
                <p>+234 000 257 0820</p>
                <p>name@gmail.com</p>
            </div>
        </COntactSectionStyled>
    )
}

const COntactSectionStyled = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 4rem 0;
    z-index: 1;
    p{
        opacity: .5;
        margin: .4rem 0;
    }
    .bg-image{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        img{
            width: 80%;
            opacity: .07;
        }
    }
    .contact-title{
        position: relative;
        padding-bottom: 1rem;
        margin-bottom: 2rem;
        font-weight: 500;
        font-size: 1.5rem;
        &::before{
            content: '';
            position: absolute;
            bottom: 0;
            transform: translateX(-50%);
            width: 4rem;
            height: 2px;
            background-color: #eb3fa9;
            left: 50%;
        }
    }
`

export default COntactSection