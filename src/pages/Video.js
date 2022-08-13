import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReplyIcon from '@mui/icons-material/Reply';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
gap: 24px;
`
const Content = styled.div`
flex: 5;
`

const VideoWrapper = styled.div`

`
const Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color: ${({ theme }) => theme.text};
`
const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Info = styled.span`
    color: ${({ theme }) => theme.textSoft};
`
const Buttons = styled.div`
display: flex;
gap: 20px;
color: ${({ theme }) => theme.text};
`
const Button = styled.div`
display: flex;
align-items: center;
gap: 5px;
cursor:pointer
`
const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid ${({ theme }) => theme.text};;
`

const Recomended = styled.div`
flex: 2;
`

function Video() {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe width="1000" height="545" src="https://www.youtube.com/embed/yIaXoop8gl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </VideoWrapper>
                <Title>TEst Video</Title>
                <Details>
                    <Info>29,593 views  Jun 30, 2022</Info>
                    <Buttons>
                        <Button><ThumbUpOffAltIcon />42k</Button>
                        <Button><ThumbDownOffAltIcon />Dislike</Button>
                        <Button><ReplyIcon />Share</Button>
                        <Button><PlaylistAddCheckIcon />Save</Button>
                    </Buttons>
                </Details>
                <Hr />
            </Content>
            <Recomended>Recomended</Recomended>
        </Container>
    )
}

export default Video