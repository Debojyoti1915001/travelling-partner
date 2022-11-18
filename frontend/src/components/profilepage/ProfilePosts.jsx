import React from 'react'
import './ProfilePosts.css'


const ProfilePosts = (props) => {
  return (
    <>
        <div className="rightside-img">
            <img src={props.src} alt="" />
            <div className="pro-icon">
                <img className='thumbsup' src="./images/thumbsup.png" alt="" />
                <span>55</span>
                <img src="./images/view.png" alt="" />
                <span>21k</span>
            </div>
        </div>
    </>
  )
}

export default ProfilePosts