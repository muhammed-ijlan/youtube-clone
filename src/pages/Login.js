import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
flex-direction: column;
display: flex;
align-items: center;
justify-content: center;
height: calc(100vh - 56px);
color: ${({ theme }) => theme.text};
`
const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: ${({ theme }) => theme.bgLighter};
border:1px solid ${({ theme }) => theme.soft};
padding: 20px 50px;
gap: 10px;
`
const Title = styled.h1`
font-size: 24px;
`
const SubTitle = styled.h2`
font-size: 20px;
font-weight: 300;
`
const Input = styled.input`
border:1px solid ${({ theme }) => theme.soft} ;
border-radius: 3px;
padding: 10px;
background-color: transparent;
width: 100%;

`
const Button = styled.button`
border-radius:3px;
border: none;
padding: 10px 20px;
cursor: pointer;
font-weight: 500;
background-color:${({ theme }) => theme.soft}  ;
color:${({ theme }) => theme.textSoft}  ;

`
const More = styled.div`
display: flex;
margin-left: 50px;
font-size: 12px;
margin-top: 10px;
color:${({ theme }) => theme.textSoft} ;

`
const Links = styled.div`


`
const Link = styled.span`
margin-left: 30px;
`

function Login() {
    return (
        <Container>
            <Wrapper>
                <Title>Sign in</Title>
                <SubTitle>To Continue our website</SubTitle>
                <Input placeholder='Username' />
                <Input type="password" placeholder='password' />
                <Button>SignIn</Button>
                <Title>Or</Title>

                <Input placeholder='Username' />
                <Input placeholder='email' />
                <Input type="password" placeholder='password' />
                <Button>Register</Button>
            </Wrapper>
            <More>
                English(US)
                <Links>
                    <Link>help</Link>
                    <Link>privacy</Link>
                    <Link>terms</Link>
                </Links>
            </More>
        </Container>
    )
}

export default Login