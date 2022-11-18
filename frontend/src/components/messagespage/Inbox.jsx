import React from "react";
import "./Inbox.css";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Users from "./Users";

const Inbox = () => {
  return (
    <>
      <div className="mid_msg">
        <h1>All messages</h1>
        <div className="inbox_heading">
          <div className="inbox_headingleft">
            <p>Inbox</p>
            <div className="msg_notification">2 new</div>
          </div>
          <img src="./images/bsettings.png" alt="" />
        </div>
        <div className="search_user">
          <input type="text" placeholder="Search" />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
        <div className="msg_users">
            <Users/>
            <Users/>
            <Users/>
            <Users/>
            <Users/>
            <Users/>
        </div>
      </div>
    </>
  );
};

export default Inbox;
