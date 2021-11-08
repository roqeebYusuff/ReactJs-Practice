import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
    }

    body{
        background-color: #03091f;
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
        color: #fff;
    }

    a{
        color: inherit;
        font-family: inherit;
        text-decoration: none;
    }

    p{
        line-height: 2rem;
    }

    img{
        max-width: 100%;
    }

    .Before{
        position: relative;
        padding-left: 3rem;
        &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            width: 35px;
            height: 2px;
            background-color: #395ff6;
        }
    }

    .GradientText{
        background: linear-gradient(120deg, rgb(132, 111, 244), rgb(241, 118, 116));
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        display: inline-block;
    }

    .title-container{
        text-align: center;
        width: 50%;
        margin: 0 auto;
    }
`;

export default GlobalStyle
