import React from 'react'
import './SideProfile.css'
import SidebarOptions from '../Home/Sidebar/SidebarOptions'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import Rightbaroptions from '../Home/Rightbar/Rightbaroptions';

const SideProfile = () => {
  return (
    <>
        <div className="sideprofile-main">
            <div className="side-top">
                <SidebarOptions src="./images/dashboard.png" title="Dashboard"/>   
                <SidebarOptions src="./images/message.png" title="Messages"/>  
                <SidebarOptions src="./images/community.png" title="Community"/>
                <SidebarOptions src="./images/settings.png" title="Settings"/>  
            </div>
            <div className="partition"></div>
            <div className="side-mid">
                <div className="side-post">
                    <h2>Posts</h2>
                    <ArrowDropDownOutlinedIcon/>
                </div>
                <div className="post-opt">
                    <SidebarOptions src="./images/published.png" title="Published"/>
                    <SidebarOptions src="./images/archive.png" title="Archived"/>
                </div>
            </div>
            <div className="partition"></div>
            <div className="side-bottom">
                <div className="side-students">
                    <h2>Students</h2>
                    <ArrowDropDownOutlinedIcon/>
                </div>
                <div className="student-opt">
                    <Rightbaroptions src="./images/pic.png" title="Monika Chauhan" username="@monikachauhan45"/>
                    <Rightbaroptions src="./images/mentor1.png" title="Shalley Jindal" username="@_shalley56"/>
                    <Rightbaroptions src="./images/mentor2.png" title="Dolkar Lhamo" username="@DolaLeh12"/>
                    <Rightbaroptions src="./images/mentor3.png" title="Siddharth Sharma" username="@sidFuture"/>
                    <Rightbaroptions src="./images/mentor4.png" title="Nishant Dimri" username="@Dimridada"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default SideProfile