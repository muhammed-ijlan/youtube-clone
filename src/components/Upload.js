
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase"

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
    const [inputs, setInputs] = useState({})
    const [tags, setTags] = useState([])

    const uploadFile = (file, urlType) => {
        const storage = getStorage(app);
        const fileName = new Date().getDate() + file.name
        const storageRef = ref(storage, fileName);

        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                urlType === "imgUrl" ? setImgPercentage(Math.round(progress)) : setVideoPercentage(Math.round(progress))
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        break;
                }
            },
            (error) => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setInputs((prev) => {
                        return { ...prev, [urlType]: downloadURL }
                    })
                });
            })
    }

    useEffect(() => {
        video && uploadFile(video, "videoUrl")
    }, [video])


    useEffect(() => {
        img && uploadFile(img, "imgUrl")
    }, [img])

    const handleTags = (e) => {
        setTags(e.target.value.split(","))
    }
    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    return (
        <Container>
            <Wraper>
                <Close onClick={() => setOpen(false)}>X</Close>
                <Title>Upload a New Video</Title>
                <Label>Video:</Label>
                {videoPercentage > 0 && videoPercentage < 99 ? ("Uploading : " + videoPercentage + "%") :
                    videoPercentage == 100 ? "The video Has been Uploaded" :
                        <Input type="file" accept='video/*' onChange={(e) => setVideo(e.target.files[0])} />
                }

                <Input type='text' placeholder='Title' name='title' onChange={handleChange} />
                <Desc placeholder='Description' rows={8} name="desc" onChange={handleChange} />
                <Input type='text' placeholder='Seperate tags with commas' onChange={handleTags} />
                <Label>Image:</Label>
                {imgPercentage > 0 && imgPercentage < 99 ? ("Uploading : " + imgPercentage + "%") :
                    imgPercentage == 100 ? "The Thumbnail Has been Uploaded" :
                        <Input type="file" accept='image/*' onChange={(e) => setImg(e.target.files[0])} />
                }
                <Button>Upload</Button>
            </Wraper>
        </Container>
    )
}

export default Upload