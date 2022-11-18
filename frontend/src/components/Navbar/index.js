import React from 'react'
import './index.css';
import { NavLink , Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="nav-main">
        <div className="nav-left">Logo</div>
        <div className="nav-center">
           <div className="nav-list">
              <ul>
                <li>Home</li>
                <li>Features</li>
                <li>How it works</li>
                <li>About Us</li>
              </ul>      
           </div>
        </div>
        <div className="nav-right">
            <ul>
                <li><NavLink to="/login">Log In</NavLink></li>
                <span><button className='join'>Join Now</button></span>
            </ul>
        </div>
    </div>
  )
}

export default Navbar