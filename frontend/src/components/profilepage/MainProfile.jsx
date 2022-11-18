import React from "react";
import "./MainProfile.css";
import ProfilePosts from "./ProfilePosts";

const MainProfile = () => {
  return (
    <>
      <div className="main-profile">
        <img
          className="main-profile-img"
          src="./images/orange-rect.png"
          alt=""
        />
        <div className="edit-btn">
          <button>
            Edit Profile
            <img src="./images/edit.png" alt="" />
          </button>
        </div>
        <div className="rightside">
          <div className="profile-card">
            <img
              className="profilecard-img"
              src="./images/display-pic.png"
              alt=""
            />
            <h3>Susainne Jamiya</h3>
            <p className="pro-mail">@susainne1234</p>
            <p className="pro-intro">
              I am currently employed by the General Capital Corporation
              Company, an opportunity I learned through the College of Business’
              Annual Job Fair for Accounting and Finance students.
            </p>
            <div className="profile-intro">
              <div className="profile-followers">
                <h3>41k</h3>
                <p>Followers</p>
              </div>
              <div className="follow-line"></div>
              <div className="profile-following">
                <h3>2k</h3>
                <p>Following</p>
              </div>
            </div>
            <div className="profile-follow">
              <button>Follow</button>
              <div className="pro-dots">
                <img src="./images/dots.png" alt="" />
              </div>
            </div>
            <div className="profile-line"></div>
            <p className="registered">Registered on jan, 2022</p>
          </div>
        </div>
        <div className="profile-right">
          <button className="selected-btn">Posts</button>
          <button className="not-selected">Courses</button>
          <button className="not-selected">Progress Report</button>
          <button className="not-selected">Achievements</button>
        </div>
        <div className="profile-posts">
            <div className="postspro">
                <ProfilePosts src="./images/profile1.png"/>
                <ProfilePosts src="./images/profile2.png"/>
                <ProfilePosts src="./images/profile3.png"/>
            </div>
            <div className="postspro">
                <ProfilePosts src="./images/profile4.png"/>
                <ProfilePosts src="./images/profile5.png"/>
                <ProfilePosts src="./images/profile6.png"/>
            </div>
        </div>
      </div>
    </>
  );
};

export default MainProfile;
