import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    width: 360px;
    margin-bottom: 45px;
    cursor: pointer;
`
const Image = styled.img`
width: 100%;
height: 202px;
background-color: #999;
`
const Details = styled.div`
display: flex;
margin: 16px;
gap: 12px;
`
const ChannelImg = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
background-color: #999;
`
const Texts = styled.div``
const Title = styled.h1`
font-size: 16px;
font-weight: 500;
color: ${({ theme }) => theme.text};
`
const ChannelName = styled.h2`
font-size: 14px;
color:  ${({ theme }) => theme.textSoft};
margin: 9px 0px;
`
const OtherInfo = styled.div`
font-size: 14px;
color:  ${({ theme }) => theme.textSoft};
`

function Card() {
    return (
        <Link to='/video/test' style={{ textDecoration: "none" }}>
            <Container>
                <Image src='https://www.adobe.com/express/create/thumbnail/media_1dbde0324d7a246981b97c7efc38d56176d359e3f.jpeg?width=400&format=jpeg&optimize=medium' />
                <Details>
                    <ChannelImg src='https://images-platform.99static.com/axc2wMV9jfMSAgUgTfZvbgvW1cM=/186x1744:814x2372/500x500/top/smart/99designs-contests-attachments/94/94866/attachment_94866426' />
                    <Texts>
                        <Title>Test Video</Title>
                        <ChannelName>Lama Dev</ChannelName>
                        <OtherInfo>29K views
                            1 month ago</OtherInfo>
                    </Texts>
                </Details>
            </Container>
        </Link>
    )
}

export default Card