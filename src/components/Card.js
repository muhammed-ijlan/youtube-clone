import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    width: ${(props) => props.type !== "sm" && "360px"};
    margin-bottom: ${(props) => props.type === "sm" ? "10px" : "45px"};
    cursor: pointer;
    display: ${(props) => props.type === "sm" && "flex"};
    gap: 10px;
`
const Image = styled.img`
width: 100%;
height: ${(props) => props.type === "sm" ? "120px" : "202px"};
background-color: #999;
flex: 1;
`
const Details = styled.div`
display: flex;
margin-top: ${(props) => props.type !== "sm" && "16px"};
gap: 12px;
flex: 1;
`
const ChannelImg = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
background-color: #999;
display: ${(props) => props.type === "sm" && "none"};
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

function Card({ type }) {
    return (
        <Link to='/video/test' style={{ textDecoration: "none" }}>
            <Container type={type}>
                <Image type={type} src='https://www.adobe.com/express/create/thumbnail/media_1dbde0324d7a246981b97c7efc38d56176d359e3f.jpeg?width=400&format=jpeg&optimize=medium' />
                <Details type={type}>
                    <ChannelImg type={type} src='https://images-platform.99static.com/axc2wMV9jfMSAgUgTfZvbgvW1cM=/186x1744:814x2372/500x500/top/smart/99designs-contests-attachments/94/94866/attachment_94866426' />
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