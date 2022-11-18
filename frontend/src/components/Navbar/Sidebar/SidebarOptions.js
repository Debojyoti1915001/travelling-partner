
import React from 'react'
import './Sidebaroptions.css'

const SidebarOptions = (props) => {
  return (
    <div className="sidebar-row">
        <img src={props.src}  />
        <p>{props.title}</p>
    </div>
  )
}

export default SidebarOptions