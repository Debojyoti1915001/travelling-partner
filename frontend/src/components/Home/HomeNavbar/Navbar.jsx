import React from 'react'
import './Navbar.css'
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const Navbar = () => {
  return (
    <div className="header">
            <div className="header-left">
                <img className='header-logo' src="./images/logo.png" alt="" />
                <div className="search">
                    <input type="text" placeholder='Search' />
                    <IconButton><SearchIcon/></IconButton>
                </div>
            </div>
        
        <div className="header-right">
            <button className='hbtn'>Courses</button>
            <img className='chat' src="./images/chat.png" alt="" />
            <img src="./images/like.png" alt="" />
            <div className="notification">
                <NotificationsIcon/>
            </div>
            <div className="homeprofile">
            <img className='profile-img' src="./images/profile.png" alt="" />
                <span><p> MonikaChuhan12</p></span>
                <ArrowDropDownOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Navbar