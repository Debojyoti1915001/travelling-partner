import React, { useState } from "react";
import "./Chat.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Chat = () => {
  const [msg, setMsg] = useState("");
  const [allMessages, setMessages] = useState([]);

  const handleChange = (e) => setMsg(e.target.value);
    
  const handleKeyDown = (e) =>{
    if(e.key === "Enter" || e.key === "NumpadEnter"){
        onSubmit();
    }
  };

  var showdate = new Date();
  var hours = showdate.getHours();
  var prepend = hours >= 12 ? "PM" : "AM";
  var displaytime = hours + ":" + showdate.getMinutes() + " " + prepend;

  const onSubmit = () => {
    if(msg!== ""){
        const newMessage = { time: displaytime, msg };
    setMessages([...allMessages, newMessage]);
    }
    setMsg("")
  };


  return (
    <>
      <div className="chat_info">
        <div className="chat_user">
          <div className="chat_intro">
            <img src="./images/mentor1.png" alt="" />
            <div>
              <h3>Monika Chauhan</h3>
              <p>monikachauhan12</p>
            </div>
          </div>
          <div className="user_icon">
            <MoreVertIcon fontSize="small" />
          </div>
        </div>
        <div className="sending_msgs">
          {allMessages.map((msg) => {
            return (
              <div className="outgoing_msg">
                <div className="outgoing_msg_inbox">
                  <p>{msg.msg}</p>
                  <span>{msg.time}</span>
                </div>
              </div>
            );
          })}
          {/* <div className="outgoing_msg">
            <div className="outgoing_msg_inbox">
              <p>Have a great day sir!</p>
              <span>09:27 PM</span>
            </div>
          </div>
          <div className="incoming_msg">
            <div className="incoming_msg_inbox">
              <p>Have a great day sir!</p>
              <span>09:27 PM</span>
            </div>
          </div> */}
          <div className="sending_input">
            <input
              type="text"
              className="message_send"
              value={msg}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Write a message ...."
            />
            <img src="./images/attachment.png" alt="" />
            <img src="./images/mood.png" alt="" />
            <button className="send_icon" onClick={onSubmit}>
              <img src="./images/send.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
