import React from 'react'
import "./OurMission.css"


const Mission = () => {
  return (
    <div className="main-miss">
        <div className="miss-left">
            <div className="one1">
                <div className="one">1</div>
                <div className="para1"><p>To provide an ecosystem for the students to excel forming a community</p></div>
            </div>
            <div className="two2">
                <div className="two">2</div>
                <div className="para2"><p>Being a thinker, innovator or implementer, creates a comfortable zone for students and mentors to discuss about the research, startup or counselling.</p></div>
            </div>
        </div>
        <div className="miss-center">
            <h1>OUR <span className='vision'>VISION</span> & <span className='mission'>MISSION</span></h1>
            <img src="./images/rocket.png" alt="" />
        </div>
        <div className="miss-right">
            <div className="three3">
                <div className='para3'><p>To guide, support and counsel students in their initial career planning stages.</p></div>
                <div className="three">3</div>
            </div>
            <div className="four4">
                <div className='para4'><p>To instill the abilities of a thinker, innovator and implementor in students community by providing them an interactive and learning platform from mentors to excel in the field of research and startups.</p></div>
                <div className="four">4</div>
            </div>
        </div>
    </div>
  )
}

export default Mission