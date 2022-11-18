import React from 'react'
import './Who.css'


const Who = () => {
  return (
    <>
      <div className="effect">
        <img className='effect-img' src="./images/effect.png" alt="" />
        <h1>Who we <span>are?</span></h1>
      </div>
        <div className="main-who">
            <img className='who-img' src="./images/allgroup.png" alt="" />        
            <div className="main-box">
                <div className="box">
                    <div className="b1">Adroidconnectz is the nation's biggest community of students and mentors , providing the one stop solution to all the queries related to startups , research , internships , higher studies ,innovations etc.</div>
                    <div className="b2">Team of Adroid connectz comprises of renowned ressearches and enterpreneurs . This team motivates the students to undertake a career exploration journey and make appropriate career choices at right time.</div>
                    <div className="b3">Adroidconnectz consistly updates the students to pace up with everchangng dynamism of technology and environment.</div>
                </div>
            </div>
        </div>
        <div className="side-img">
          <img src="./images/vector1.png" alt="" className="im1" />
          <img src="./images/vector2.png" alt="" className="im2" />
          <img src="./images/vector3.png" alt="" className="im3" />
        </div>
           
    </>
  )
}

export default Who