import React from 'react'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const VideoNav = () => {
  return (
    <>
    <div className="header">
            <div className="header-left">
                <img className='header-logo' src="./images/logo.png" alt="" />
            </div>
        
        <div className="header-right">
            <div className="homeprofile">
            <img className='profile-img' src="./images/profile.png" alt="" />
                <span><p> MonikaChauhan12</p></span>
                <ArrowDropDownOutlinedIcon/>
            </div>
        </div>
    </div>
    </>
  )
}

export default VideoNav