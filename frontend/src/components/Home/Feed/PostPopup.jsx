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
      <iframe name="hiddenFrame" class="hide"></iframe>
        <form action="/all-post" method="POST" enctype="multipart/form-data" target="hiddenFrame">
          <div className="popup-main">
            <div className="popup-header">
              <h1>Add Photos</h1>
              <div className="popupbtn">
                <button>
                  <input type="file" placeholder="Add Photo" name="photo"/>
                </button>
                <div className="closeicon" onClick={props.data}><Close /></div>
              </div>
            </div>
            <div className="popup-mid">
              <div className="location">
              <input
              // type="text"
                  className="location-icon"
                  placeholder="Name"
                  name="name"
                ></input>
                <br/>
                <input
                // type="text"
                  className="location-icon"
                  placeholder="Locality"
                  name="locality"
                ></input>
                <br/>
                <input
                // type="text"
                  className="location-icon"
                  placeholder="City"
                  name="city"
                ></input>
                <br/>
                <input
                // type="text"
                  className="location-icon"
                  placeholder="Pin"
                  name="pin"
                ></input>
                <br/>
                <input
                // type="text"
                  className="location-icon"
                  placeholder="Country"
                  name="country"
                ></input>
              </div>

            </div>
            <div className="popup-footer">
              <button className="popupost">Post</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostPopup;
