import React from 'react'
import './Intro.css'

const Intro = () => {
  return (
        <section className="showcase">
          
          <div className="overlay"></div>
          <div className="text">
            <h2>Lets Clean Earth </h2> 
            <h3>Togetherly and Digitally</h3>
            <p>Waste Devliver is a project to clean the earth using the latest technologies. We have used Machine Learning to identify waste areas and target them for cleaning</p>
          </div>
          <ul className="social">
            <li><a href="#"><img src={"https://i.ibb.co/x7P24fL/facebook.png"}/></a></li>
            <li><a href="#"><img src={"https://i.ibb.co/Wnxq2Nq/twitter.png"}/></a></li>
            <li><a href="#"><img src={"https://i.ibb.co/ySwtH4B/instagram.png"}/></a></li>
          </ul>
        </section>    
  )
}

export default Intro