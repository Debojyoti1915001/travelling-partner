import React from "react";
import "./PostPopup.css";
import Add from "@mui/icons-material/AddCircleOutline";
import Close from "@mui/icons-material/Close";
import Location from "@mui/icons-material/LocationOnOutlined";
import AddIcon from "@mui/icons-material/Add";



const PostPopup = (props) => {
  return (
    <>
      <div className="main-pop">
        <div className="popup-main">
          <div className="popup-header">
            <h1>Add Photos</h1>
            <div className="popupbtn">
              <button>
                <Add fontSize="small" />
                <p>Add pictures/videos</p>
              </button>
              <div className="closeicon" onClick={props.data}><Close/></div>
            </div>
          </div>
          <div className="popup-mid">
            <div className="popup-left">
              <textarea
                className="popup-text"
                placeholder="Want to describe ..."
              ></textarea>
              <div className="location">
                <Location className="location-icon" fontSize="small" />
                <p> Location</p>
              </div>
            </div>
            <div className="popup-right">
              <div>
                <button className="addicon">
                  <AddIcon />
                </button>
              </div>
              <div>
                <button className="clearbtn">Clear all</button>
              </div>
              <p>0 file(s) selected</p>
            </div>
          </div>
          <div className="popup-footer">
            <button className="popupost">Post</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPopup;
