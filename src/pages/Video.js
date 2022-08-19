import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comments from "../components/Comments";
import Card from './../components/Card';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { dislike, fetchSuccess, like } from "../redux/videoSlice";
import { format } from "timeago.js"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.text}; ;
`;

const Recomended = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
display: flex;
gap: 20px;

`;
const Img = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;
const ChannelDetail = styled.div`
display: flex;
flex-direction: column;
color: ${({ theme }) => theme.text}; 
`;
const ChannelName = styled.span`
font-weight: 500;
`;

const ChannelCounter = styled.span`
margin-top: 5px;
margin-bottom: 20px;
color: ${({ theme }) => theme.textSoft};
font-size: 12px;
`;
const Description = styled.p`
font-size: 14px;
`;


const Subscribe = styled.button`
background-color: #cc1a00;
font-weight: 500;
color: white;
border: none;
border-radius: 3px;
height: max-content;
cursor: pointer;
padding: 10px 20px;
`;

function Video() {

  const { currentUser } = useSelector(state => state.user)
  const { currentVideo } = useSelector(state => state.video)
  const dispatch = useDispatch()

  const path = useLocation().pathname.split("/")[2]

  const [channel, setChannel] = useState({})

  useEffect(() => {
    try {
      const fetchData = async () => {
        const videoRes = await axios.get(`http://localhost:8800/api/video/find/${path}`)
        const channelRes = await axios.get(`http://localhost:8800/api/users/find/${videoRes.data.userId}`)
        dispatch(fetchSuccess(videoRes.data))
        setChannel(channelRes.data)
      }
      fetchData()
    } catch (err) {

    }
  }, [path, dispatch])

  const handleLike = async () => {
    await fetch(`http://localhost:8800/api/users/like/${currentVideo._id}`, {
      method: "PUT"
    })
    dispatch(like(currentUser._id))
  }
  const handleDislike = async () => {
    await axios.put(`http://localhost:8800/api/users/dislike/${currentVideo._id}`)
    dispatch(dislike(currentUser._id))
  }


  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="1000"
            height="545"
            src="https://www.youtube.com/embed/yIaXoop8gl4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>{currentVideo.title}</Title>
        <Details>
          <Info>{currentVideo.views} views {format(currentVideo.createdAt)}</Info>
          <Buttons>
            <Button onClick={handleLike}>
              {currentVideo.likes?.includes(currentUser._id) ? <ThumbUpIcon /> : < ThumbUpOffAltIcon />}
              {currentVideo.likes?.length}
            </Button>
            <Button onClick={handleDislike}>
              {currentVideo.dislikes?.includes(currentUser._id) ? <ThumbDownIcon /> : <ThumbDownOffAltIcon />}
              Dislike
            </Button>
            <Button>
              <ReplyIcon />
              Share
            </Button>
            <Button>
              <PlaylistAddCheckIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Img src={channel.img} />
            <ChannelDetail>
              <ChannelName>{channel.name}</ChannelName>
              <ChannelCounter>{channel.subscribers}</ChannelCounter>
              <Description>{ }</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      {/* <Recomended>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recomended> */}
    </Container>
  );
}

export default Video;
