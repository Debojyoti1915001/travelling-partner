import React from "react";
import "./Coursecontent.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";

const Coursecontent = () => {
  return (
    <>
      <div className="coursesection">
        <div className="content">
          <h2>Course Content</h2>
        </div>
        <div className="completed">
          <p>2/5 COMPLETED</p>
          <div className="loading">
            <div></div>
            <div></div>
            <div className="notviewed"></div>
            <div className="notviewed"></div>
            <div className="notviewed"></div>
            <div className="notviewed"></div>
          </div>
        </div>
        <div className="course_content">
          <div className="num-intro">
            <div className="indexnumb">1</div>
            <p>What is interaction design?</p>
          </div>
          <div className="time-span">
            <KeyboardArrowDownIcon className="arrowdwn" fontSize="medium" />
            <p>10min</p>
          </div>
        </div>
        <div className="video_span_main">
          <div className="video_span">
            <input type="checkbox" className="video-checkbox" />
            <div>
              <p className="video_intro">1. Introduction to the course</p>
              <div className="played">
                <PlayCircleRoundedIcon fontSize="small" />
                <p>2 min</p>
              </div>
            </div>
          </div>
          <div className="video_span">
            <input type="checkbox" className="video-checkbox" />
            <div>
              <p className="video_intro">2. Introduction</p>
              <div className="played">
                <PlayCircleRoundedIcon fontSize="small" />
                <p>3 min</p>
              </div>
            </div>
          </div>
          <div className="video_span">
            <input type="checkbox" className="video-checkbox" />
            <div>
              <p className="video_intro">3. Introduction</p>
              <div className="played">
                <PlayCircleRoundedIcon fontSize="small" />
                <p>4 min</p>
              </div>
            </div>
          </div>
        </div>
        <div className="course_content">
          <div className="num-intro">
            <div className="indexnumb">2</div>
            <p>Motion in UI Design</p>
          </div>
          <div className="time-span">
            <KeyboardArrowDownIcon className="arrowdwn" fontSize="medium" />
            <p>10min</p>
          </div>
        </div>
        <div className="course_content">
          <div className="num-intro">
            <div className="indexnumb">3</div>
            <p>Fundamentals of UI Design</p>
          </div>
          <div className="time-span">
            <KeyboardArrowDownIcon className="arrowdwn" fontSize="medium" />
            <p>10min</p>
          </div>
        </div>
        <div className="course_content">
          <div className="num-intro">
            <div className="indexnumb">4</div>
            <p>Improving Visual Skills</p>
          </div>
          <div className="time-span">
            <KeyboardArrowDownIcon className="arrowdwn" fontSize="medium" />
            <p>10min</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coursecontent;
