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
                            <h2>{props.uname}</h2>
                            <img src="./images/dot.png" alt="" />
                            <span>Follow</span>
                        </div>
                        <div className="about">
                            <p>{props.about}</p>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="cardtop-right">
                    <img src="./images/dots.png" alt="" />
                    <p>3 minutes ago</p>
                </div>
            </div>
            <div className="card-mid">
                <form action={"/updatepost/"+props.id} method="POST">
                <textarea name="desc">{props.intro}</textarea>
                <button className='post'>Edit</button>
                </form>
                <img src={props.mainimg} alt="" />
            </div>
            <div className='xline'></div>
            <div className="card-bottom">
                <img className='cmnt-img' src="./images/pic.png" alt="" />
                <div className="comment">
                    <form action="">
                        <input className='cardinput' type="text" placeholder='Add comment ...' />
                    </form>
                    <img className='emoji' src="./images/emoji.png" alt="" />
                    <img className='pictures' src="./images/pictures.png" alt="" />
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