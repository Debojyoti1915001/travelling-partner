import React from "react";
import './Message.css'
import Navbar from "../components/Home/HomeNavbar/Navbar";
import SidebarOptions from "../components/Home/Sidebar/SidebarOptions";
import Inbox from "../components/messagespage/Inbox"
import Chat from "../components/messagespage/Chat"

const Message = () => {
  return (
    <>
      <Navbar />
      <div className="main_msgfeed">
        <div className="side_msg">
          <div className="bfeed">
            <SidebarOptions src="./images/bfeed.png" title="Feed" />
          </div>
          <SidebarOptions src="./images/dashboard.png" title="Dashboard" />
          <SidebarOptions src="./images/blogs.png" title="Blogs" />
          <SidebarOptions src="./images/settings.png" title="Settings" />
          <div>
            <button className="createpost">Create Post</button>
          </div>
        </div>
        <div className="main_msg">
            <Inbox/>
            <Chat/>
        </div>
      </div>
    </>
  );
};

export default Message;
