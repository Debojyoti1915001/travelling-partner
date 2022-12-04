import React from 'react'
import "./MakeUsDifferent.css"


const Different = () => {
  return (
    <div className="main-diff">
        <div className="intr">
            <h1>What makes us <span>different?</span></h1>
            <div className="para">
                <img src="./images/arrow.png" alt="" />
                <h4>INTEREST & MOTIVATION</h4>
            </div>
            <p>It provides unique oppurtunity to serve the mother earth</p>
            <div className="para">
                <img src="./images/arrow.png" alt="" />
                <h4>BENEFITS</h4>
            </div>
            <p>It will benifits the heakth and to keep sanitazation surrounding our environment</p>
            <div className="para">
                <img src="./images/arrow.png" alt="" />
                <h4>FOCUS ON EVERYONE</h4>
            </div>
            <p>It mainly focuses on cleanliness with the usage of modern technologies and so them everyone can take part in cleaniless.</p>
        </div>
        <div>
            <img className="boy" src="./images/boy.png" alt="" />
        </div>
    </div>
  )
}

export default Different