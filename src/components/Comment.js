import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
gap: 10px;
margin: 30px 0px;
`
const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`

const Details = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
const Name = styled.span`
font-size: 13px;
font-weight: bolder;
color: ${({ theme }) => theme.text};
`

const Date = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({ theme }) => theme.textSoft};
margin-left: 5px;
`
const Text = styled.span`
color: ${({ theme }) => theme.text};
font-size: 14px;
`

function Comment() {
    return (
        <Container>
            <Avatar src='https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/35849/image/Screenshot%202020-09-19%20at%208.22.59%20pm%20copy.jpg' />
            <Details>
                <Name>John Doe <Date>1 day ago</Date></Name>
                <Text>I would like to see node js as a backend for this video application and cloud firestore as a cloud server for deployment.
                    It would be pretty redundant how things just turns out.🤞</Text>
            </Details>
        </Container>
    )
}

export default Comment