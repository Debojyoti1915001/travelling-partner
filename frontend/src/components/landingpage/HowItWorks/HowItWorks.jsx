import React from 'react'
import "./HowItWorks.css"


const HowItWorks = () => {
    return (
        <div className="main-work">
            <div className="heading">
                <h1>How It <span>Works</span></h1>
                <p>Going through a roadmap of its working to better understand how its going to be </p> <p>different from everyone</p>
            </div>
            <form action="">
                <select id="dropdown" name="dropdown">

                    <option value="Student">Student</option>
                </select>
            </form>
            <img className='line' src="./images/line.png" alt="" />
            <div className="below">
                <div className="parts">
                    
                    <div className="profile">
                        <img src="./images/profilepic.png" alt="" />
                        <div className="registration boxes">
                            <h3>Registration</h3>
                            <p>Register on the AdroidConnectz App</p>
                        </div>
                    </div>
                    <div className="login">
                        <img src="./images/Login.png" alt="" />
                        <div className="createProfile boxes">
                            <h3>Create Profile</h3>
                            <p>Create your profile after first registering</p>
                        </div>
                    </div>
                    <div className="connection">
                        <img src="./images/Connection.png" alt="" />
                        <div className="makeConnection boxes">
                            <h3>Make Connections</h3>
                            <p>Connect with peers and mentors, consult them</p>
                        </div>
                    </div>
                    <div className="posts">
                        <img src="./images/posts.png" alt="" />
                        <div className="notifications boxes">
                            <h3>Notifications</h3>
                            <p>Notifications based on Rsearch, Startup and Counselling</p>
                        </div>
                    </div>
                    <div className="articles">
                        <img src="./images/articles.png" alt="" />
                        <div className="addOns boxes">
                            <h3>Add Ons</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks