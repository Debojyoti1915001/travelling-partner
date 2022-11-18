import React from "react";
import "./ProfileDetails.css";
import Navlogo from "../components/formpage/Navlogo";

const ProfileDetails = () => {
  return (
    <>
      <Navlogo />
      <div className="profile_detailsform">
        <div className="skipbtn_div">
          <button className="skipbtn">Skip</button>
        </div>
        <div className="complete_profile">
          <h1>
            Complete your <span>profile</span>
          </h1>
        </div>
        <div className="number_details">
          <div className="profile_details">
            <div>1</div>
            <p>Profile Details</p>
          </div>
          <div className="profile_exp">
            <div>2</div>
            <p>Work Experience</p>
          </div>
          <div className="profile_exp">
            <div>3</div>
            <p>Education</p>
          </div>
          <div className="profile_exp">
            <div>4</div>
            <p>Certificates/Licenses</p>
          </div>
        </div>
        <div className="form_line"></div>
        <div className="details_intro">
          <h3>Profile details</h3>
          <p>
            In this section, provide your basic information. Please enter your
            name as per bank account.
          </p>
          <p>
            You cannot change your email address until you configure a password
            for your account.
          </p>
        </div>
        <div className="details_form">
          <div className="full_form">
            {/* Name */}
            <div className="full_name">
              <div className="first_name width_small">
                <form action="">
                  <label htmlfor="fname">First name</label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="First Name"
                  />
                </form>
              </div>
              <div className="last_name width_small">
                <form action="">
                  <label htmlfor="lname">Last name</label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Last Name"
                  />
                </form>
              </div>
            </div>
            {/* Gender and DOB */}
            <div className="gender_dob">
              <div className="gender_details width_small">
                <label htmlFor="gender">Gender</label>
                <select name="gender_pro" id="gender">
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="dob_details width_small">
                <label htmlfor="Choose">Date of Birth</label>
                <input type="date" id="birth" placeholder="Choose"></input>
              </div>
            </div>
            {/* Country */}
            <div className="country width_small">
              <label htmlFor="country">Country</label>
              <select name="country" id="country">
                <option value="">Select</option>
              </select>
            </div>
          </div>
          <div>
            <button className="save_btn">
              <p>Save and Continue</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
