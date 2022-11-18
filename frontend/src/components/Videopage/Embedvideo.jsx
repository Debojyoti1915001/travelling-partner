import React from "react";
import "./Embedvideo.css";
import PropTypes from "prop-types";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Embedvideo = ({ embedId }) => {
  return (
    <>
      <div className="embed_main">
        <div className="backbtn">
          <ChevronLeftIcon fontSize="small" className="backarrow" />
          <p>Go back</p>
        </div>
        <div className="video_heading">
          <h1>User Experience Design Essentials - Adobe XD UI UX Design</h1>
          <div className="chapter">
            <p>Chapter 3/5</p>
            <div className="arrowLeft">
              <ChevronLeftIcon />
            </div>
            <div className="arrowwright">
              <ChevronRightIcon />
            </div>
          </div>
        </div>
        <div className="video-responsive">
        <iframe
          width="1048"
          height="513"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      </div>
      
    </>
  );
};

Embedvideo.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default Embedvideo;
