import React from 'react'
import { Avatar } from '@mui/material'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions'

const Sidebar = () => {
  return (
    <>
        <div className="side-main">
            <div className="side-profile">
                <div className="pro-name">
                    <Avatar className='pro-pic' alt="" src="./images/pic.png" />
                    <div className='profile-name'>
                        <h2>Monika Chauhan</h2>
                        <p className='username'>@monikachauhan45</p>
                    </div>
                </div>
                <div className="info">
                    <div className="followers">
                        <h2>1.2K</h2>
                        <p className='description'>Followers</p>
                    </div>
                    <div className="following">
                        <h2>678</h2>
                        <p className='description'>Following</p>
                    </div>
                    <div className="posts">
                        <h2>112</h2>
                        <p className='description'>Total Posts</p>
                    </div>
                </div>
            </div>
        </div>  
        <div className="selected">
        <SidebarOptions src ="./images/feed.png" title="Feed" /> 
        </div>
        <SidebarOptions src="./images/discover.png" title="Discover"/>  
        <SidebarOptions src="./images/friends.png" title="Friends"/>  
        <SidebarOptions src="./images/community.png" title="Communities"/>  
        <SidebarOptions src="./images/videos.png" title="Videos"/>  
        <SidebarOptions src="./images/blogs.png" title="Blogs"/>  
        <SidebarOptions src="./images/settings.png" title="Settings"/>  
        <div >
            <button className="createpost">Create Post</button>
        </div>
        
    </>
  )
}

export default Sidebar