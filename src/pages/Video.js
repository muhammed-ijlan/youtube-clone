import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

import React from "react";
import styled from "styled-components";

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
                <Title>TEst Video</Title>
                <Details>
                    <Info>29,593 views Jun 30, 2022</Info>
                    <Buttons>
                        <Button>
                            <ThumbUpOffAltIcon />
                            42k
                        </Button>
                        <Button>
                            <ThumbDownOffAltIcon />
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
                        <Img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/35849/image/Screenshot%202020-09-19%20at%208.22.59%20pm%20copy.jpg" />
                        <ChannelDetail>
                            <ChannelName>LAMA DEV</ChannelName>
                            <ChannelCounter>300k Subscribers</ChannelCounter>
                            <Description>Video uploading app design using React and Styled Components. Youtube clone design with hooks and functional component. React video player.

                                You are watching the 1st part.
                                Watch the second part: https://youtu.be/CCF-xV3RSSs

                                If it is valuable to you, you can support Lama Dev.
                                Join: https://www.youtube.com/channel/UCOxW...
                                Buy me a coffee: https://www.buymeacoffee.com/lamadev

                                Source Code: https://github.com/safak/youtube2022/...

                                Join Lama Dev groups
                                Facebook: https://www.facebook.com/groups/lamadev
                                Instagram: https://www.instagram.com/lamawebdev
                                Discord: https://discord.gg/yKremu4mPr
                                Twitter: https://twitter.com/lamawebdev

                                0:00 Introduction
                                01:05 Installation</Description>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>SUBSCRIBE</Subscribe>
                </Channel>
            </Content>
            <Recomended>Recomended</Recomended>
        </Container>
    );
}

export default Video;
