import { Avatar } from '@mui/material'
import React from 'react'
import "./Rightbaroptions.css"

const Rightbaroptions = (props) => {
  return (
    <div className="right-mentors">
        <div className="profile-pics">
            {<Avatar src={props.src}/>}
        </div>
        <div className="data">
            <h4>{props.title}</h4>
            <p>{props.username}</p>
        </div>
    </div>
  )
}

export default Rightbaroptions