import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div`

`
const NewComment = styled.div`
display: flex;
align-items: center;
gap: 20px;
`
const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`
const Input = styled.input`
width: 100%;
border: none;
outline: none;
border-bottom: 1px solid ${({ theme }) => theme.soft}; ;
background-color:transparent;
padding: 5px;
`

function Comments() {
    return (
        <Container>
            <NewComment>
                <Avatar src='https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/35849/image/Screenshot%202020-09-19%20at%208.22.59%20pm%20copy.jpg' />

                <Input placeholder='Add a comment...' />
            </NewComment>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Container>
    )
}

export default Comments