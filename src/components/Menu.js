import React from 'react'
import styled from "styled-components";
import metube from "../img/logo.png";
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagOutlinedIcon from '@mui/icons-material/OutlinedFlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';

//styled components
const Container = styled.div`
flex: 1.2;
background-color: ${({ theme }) => theme.bg};
/* height: 100vh; */
color:  ${({ theme }) => theme.text};
font-size: 14px;
position: sticky;
top: 0;
`
const Wrapper = styled.div`
padding: 18px 26px;
`
const Logo = styled.div`
display: flex;
align-items: center;
gap: 5px;
font-weight: bold;
margin-bottom: 25px;
`
const Img = styled.img`
height: 25px;
`
const Item = styled.div`
display: flex;
align-items: center;
gap: 20px;
cursor: pointer;
padding: 7.5px 0px;
`
const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid  ${({ theme }) => theme.soft};

`
const Login = styled.div`

`
const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
border-radius: 3px;
font-weight: 500;
margin-top: 10px;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
`
const Title = styled.h2`
font-size: 14px;
font-weight: 500;
color: #aaaaaa;
margin-bottom: 20px;
`

export const Menu = ({ darkMode, setDarkMode }) => {

    return (

        <Container>
            <Wrapper>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <Logo>
                        <Img src={metube} />MeTube
                    </Logo>
                </Link>
                <Item>
                    <HomeIcon /> Home
                </Item>
                <Item>
                    <ExploreOutlinedIcon /> Explore
                </Item>
                <Item>
                    <SubscriptionsOutlinedIcon /> Subscribe
                </Item>
                <Hr />
                <Item>
                    <HistoryOutlinedIcon /> History
                </Item>

                <Item>
                    <LibraryAddCheckOutlinedIcon /> Library
                </Item>
                <Hr />
                <Login>
                    Signin to Like the video, Comment, and subscribe.
                    <Button><PersonOutlineOutlinedIcon /> SIGN IN</Button>
                </Login>
                <Hr />
                <Title>Best of MeTube</Title>
                <Item>
                    <LibraryMusicOutlinedIcon /> Music
                </Item>
                <Item>
                    <SportsBasketballOutlinedIcon /> Sports
                </Item>
                <Item>
                    <SportsEsportsOutlinedIcon /> Gaming
                </Item>
                <Item>
                    <MovieCreationOutlinedIcon /> Movies
                </Item>
                <Item>
                    <ArticleOutlinedIcon /> News
                </Item>
                <Item>
                    <LiveTvOutlinedIcon /> Live
                </Item>
                <Hr />
                <Item>
                    <SettingsOutlinedIcon /> Settings
                </Item>
                <Item>
                    <OutlinedFlagOutlinedIcon /> Report
                </Item>
                <Item>
                    <HelpOutlineOutlinedIcon /> Help
                </Item>
                <Item onClick={() => setDarkMode(!darkMode)}>
                    <LightModeOutlinedIcon /> {darkMode ? "Light" : "Dark"} Mode
                </Item>
            </Wrapper>
        </Container>
    )
}
