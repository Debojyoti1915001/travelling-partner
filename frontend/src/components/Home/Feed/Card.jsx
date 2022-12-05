import React from 'react'
import './Card.css'
import sdata from './sdata.json'

const Card = (props) => {
    
    return (
        <div className="card">
            <div className="card-top">
                <div className="cardtop-left">
                    <img src={props.imgsrc} alt=""/>
                    <div className="intro">
                        <div className='intro-name'>
                            <h2>{props.name}</h2>
                            <p>{props.locality} </p>
                            <p>{props.pin}</p>
                            <p>{props.city}</p>
                            <p>{props.state}</p>
                            <p>{props.country}</p>
                        </div>
                        <div className="about">
                            <p>{props.about}</p>
                        </div>
                    </div>
                </div>
                <div className="cardtop-right">
                    <p>Location</p>
                </div>
            </div>

            <div className="card-mid">
            <iframe name="hiddenFrame" class="hide"></iframe>
                <a className='post' target="hiddenFrame" href={"http://localhost:8080/admin/delete/"+props.id}>Delete</a>
            </div>
            <div className='xline'></div>
            <div className="card-bottom">
                <img className='cmnt-img' src="./images/pic.png" alt="" />
                <div className="comment">
                    <form action="">
                        <input className='cardinput' type="text" placeholder='Add comment ...' />
                    </form>
                </div>
                  <div>
            <iframe name="hiddenFrame" class="hide"></iframe>
                <a className='post' target="hiddenFrame" href={"http://localhost:8080/admin/delete/"+props.id}>Delete</a>
            </div>
                <div className="share">
                    <img src="./images/clap.png" alt="" />
                    <p>126</p>
                    <img src="./images/comments.png" alt="" />
                    <p>58</p>
                    <img src="./images/share.png" alt="" />
                    <p>45</p>
                </div>
                
            </div>

        </div>

    )
}

export default Card