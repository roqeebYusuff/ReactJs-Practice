import React from 'react'
import styled from 'styled-components'
import SmallHeading from './SmallHeading'
import blockchain from '../img/coin.png'
import CtaButton from './CtaButton'

function MainContent() {
    return (
        <MainContentStyled>
            <div className="content">
                <div className="left">
                    <SmallHeading title={'All Digital currencies in One Place'} identifier={'Before'} />

                    <h1>
                        All NFTs You need in One Marketplace
                        The Best Place to Collect, Buy and Sell <span className="GradientText">Awesome NFTs</span>
                    </h1>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorem, dolores optio eveniet amet laudantium facilis accusantium repellendus harum minus quaerat doloribus nesciunt iusto repudiandae explicabo error reiciendis, quasi sint.
                    </p>

                    <div className="btn-container">
                        <CtaButton name={'discover more'} />
                        <CtaButton name={'get help'} />
                    </div>
                </div>
                <div className="right">
                    <img src={blockchain} alt="" />
                </div>
            </div>
        </MainContentStyled>
    )
}

const MainContentStyled = styled.div`
    width: 80%;
    height: 100%;
    padding: 50px;
    .content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
        .left{
            width: 60%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            h1{
                padding: 1.2rem 0;
            }
            .btn-container{
                margin-top: 2em;
            }
        }
        .right{
            img{
                position: absolute;
                right: 0;
                bottom: -1%;
                width: 60%;
                max-width: 100%;
            }
        }
    }
`

export default MainContent
