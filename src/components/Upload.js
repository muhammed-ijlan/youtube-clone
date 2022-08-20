
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Container = styled.div`
width: 100%;
height: 100%;
top: 0;
left: 0;
background-color: #000000a7;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
`
const Wraper = styled.div`
width: 600px;
height: 600px;
position: relative;
display: flex;
flex-direction: column;
color: ${({ theme }) => theme.text};
background-color: ${({ theme }) => theme.bgLighter};
gap: 20px;
padding: 10px;

`
const Close = styled.div`
top: 10px;
right: 10px;
position: absolute;
font-weight: 500;
cursor: pointer;
`

const Title = styled.h1`
text-align: center;
`
const Input = styled.input`
border: 1px solid ${({ theme }) => theme.soft};
color: ${({ theme }) => theme.text};
border-radius: 3px;
padding: 10px;
background-color: transparent;
`
const Desc = styled.textarea`
border: 1px solid ${({ theme }) => theme.soft};
color: ${({ theme }) => theme.text};
border-radius: 3px;
padding: 10px;
background-color: transparent;
`
const Button = styled.button`
border-radius: 3px;
border: none;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
background-color: ${({ theme }) => theme.soft};
color: ${({ theme }) => theme.textSoft};
`
const Label = styled.label`
font-size: 14px;
`

function Upload({ setOpen }) {
    const [img, setImg] = useState(undefined)
    const [video, setVideo] = useState(undefined)
    const [imgPercentage, setImgPercentage] = useState(0)
    const [videoPercentage, setVideoPercentage] = useState(0)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [tags, setTags] = useState([])

    const uploadFile = (file) => {

    }

    useEffect(() => {
        uploadFile(video)
    }, [video])


    useEffect(() => {
        uploadFile(img)
    }, [img])

    const handleTags = (e) => {
        setTags(e.target.value.split(","))
    }

    return (
        <Container>
            <Wraper>
                <Close onClick={() => setOpen(false)}>X</Close>
                <Title>Upload a New Video</Title>
                <Label>Video:</Label>
                <Input type="file" accept='video/*' onChange={(e) => setVideo(e.target.files[0])} />
                <Input type='text' placeholder='Title' onChange={(e) => e.target.value} />
                <Desc placeholder='Description' rows={8} onChange={(e) => e.target.value} />
                <Input type='text' placeholder='Seperate tags with commas' onChange={handleTags} />
                <Label>Image:</Label>
                <Input type='file' accept='image/*' onChange={(e) => setImg(e.target.files[0])} />
                <Button>Upload</Button>
            </Wraper>
        </Container>
    )
}

export default Upload