import React from "react";
import "./DetailsForm.css";

const DetailsForm = () => {
  return (
    <>
      <div className="profile_main">
        <div className="skipbtn_div">
            <button className="skipbtn">Skip</button>
        </div>
        <div className="profile-details">
          <h1>
            Complete your <span>profile</span>
          </h1>
          {/* Name */}
          <div className="full-name">
            <div className="first-name">
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
            <div className="last-name">
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
          {/* Username */}
          <div className="details-username width_large">
            <form action="">
              <label htmlfor="uname">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
              />
            </form>
          </div>
          {/* Gender and DOB */}
          <div className="gender-dob">
            <div className="gender">
              <label htmlFor="gender">Gender</label>
              <select name="gender" id="gender">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="dob">
              <label htmlfor="Choose">Date of Birth</label>
              <input type="date" id="birth"  placeholder="Choose"></input>
            </div>
          </div>
          {/* Country */}
          <div className="country width_large">
            <label htmlFor="country">Country</label>
            <select name="country" id="country">
              <option value="">Select</option>
            </select>
          </div>
          {/* Eduction */}
          <div className="education width_large">
            <label htmlFor="education">Education Type</label>
            <select name="education" id="education">
              <option value="">Select Degree</option>
            </select>
          </div>
          {/* Institution */}
          <div className="institution width_large">
            <form action="">
              <label htmlfor="institution">Institution</label>
              <input type="text" id="institution" name="institution" />
            </form>
          </div>
          {/* Subjects */}
          <div className="subjects width_large">
            <form action="">
              <label htmlfor="subjects">Subjects</label>
              <input
                type="text"
                id="subjects"
                name="subjects"
                placeholder="Enter your field of study"
              />
            </form>
          </div>
          {/* Skills */}
          <div className="skills width_large">
            <label htmlFor="skills">Skills</label>
            <select name="skills" id="skills">
              <option value="">Select</option>
            </select>
          </div>
          <button>
            <p>Save and Continue</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailsForm;
