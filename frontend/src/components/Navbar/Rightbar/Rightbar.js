import React from 'react'
import './Rightbar.css'
import Rightbaroptions from './Rightbaroptions'

const Rightbar = () => {
  return (
    <>
        <div className="rightbar">
            <h2>Suggested Mentors</h2>
            <div className="mentors">
                <Rightbaroptions src="./images/pic.png" title="Monika Chauhan" username="@monikachauhan45"/>
                <Rightbaroptions src="./images/mentor1.png" title="Shalley Jindal" username="@_shalley56"/>
                <Rightbaroptions src="./images/mentor2.png" title="Dolkar Lhamo" username="@DolaLeh12"/>
                <Rightbaroptions src="./images/mentor3.png" title="Siddharth Sharma" username="@sidFuture"/>
                <Rightbaroptions src="./images/mentor4.png" title="Nishant Dimri" username="@Dimridada"/>
            </div>
        </div>
    </>
  )
}

export default Rightbar