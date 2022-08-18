import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'

const Container = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`

function Home({ type }) {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        try {
            const fetchVideo = async () => {
                const res = await axios.get(`http://localhost:8800/api/video/${type}`)

                setVideos(res.data)
            }
            fetchVideo()
        } catch (err) {
            console.log(err);
        }
    }, [type])

    console.log(videos);

    return (
        <Container>
            {videos.map(video => (
                <Card key={video._id} video={video} />
            ))}
        </Container>
    )
}

export default Home