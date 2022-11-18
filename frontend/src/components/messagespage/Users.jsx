import React from 'react'
import './Users.css'

const Users = () => {
  return (
    <>
        <div className="user_data">
            <div className="user_info">
                <div>
                    <img className="user_img" src="./images/mentor1.png" alt="" />
                </div>
                <div className="user_idname">
                    <h2 className='nuser'>Monika Chauhan</h2>
                    <h3 className='user_id'>monikachauhan12</h3>
                </div>
                <div className="time_ago">
                    <p>2m</p>
                </div>
            </div>
            <p className='user_msg'>Hello Sir, how are you doing?</p>
            <div className="user_line"></div>
        </div>
    </>
  )
}

export default Users