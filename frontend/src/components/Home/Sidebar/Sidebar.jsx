import React from 'react'
import { Avatar } from '@mui/material'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions'

const Sidebar = () => {

    //const [userData, setUserData] = useState();

    // const collectData =async (e) => {
    //     e.preventDefault();
    //     //const data = await res.json();
    //     setUserData(data)
    // }

  return (
    <>
        <div className="side-main">
            <div className="side-profile">
                <div className="pro-name">
                    <Avatar className='pro-pic' alt="" src="./images/pic.png" />
                    <div className='profile-name'>
                        <h2>Debojyoti Das</h2>
                        <p className='username'>@Debojyoti Das</p>
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
                    <div className="totalposts">
                        <h2>112</h2>
                        <p className='description'>Total Posts</p>
                    </div>
                </div>
            </div>
        </div>  
        <div className="selected">
        <SidebarOptions src ="./images/feed.png" title="Feed" /> 
        </div>
        <SidebarOptions src="./images/dashboard.png" title="Dashboard"/>   
        <SidebarOptions src="./images/blogs.png" title="Blogs"/>  
        <SidebarOptions src="./images/settings.png" title="Settings"/>  
        <div >
            <button className="createpost">Create Post</button>
        </div>
        
    </>
  )
}

export default Sidebar