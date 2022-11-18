import React, { useState } from 'react'
import './Feed.css'
import Card from './Card'
import sdata from './sdata.json'
import PostPopup from './PostPopup'

const Feed = () => {
    const [popup, setPopup]=useState(false);
    const handlePopup =()=>{
        setPopup(!popup)
    }
    
    const closePopup = ()=>{
        setPopup(false)
    }
    return (
        <>
            
            <div className="main-feed">
                <div className="feed">
                    <div className="feed-top">
                        <img className='fimg' src="./images/feedpic.png" alt="" />
                        <form action="">
                            <input className='ftext' type="text" placeholder='What you would like to share?' />
                        </form>
                    </div>
                    <div className="feed-bottom">
                        <div className="photo">
                            <img src="./images/photo.png" alt="" />
                            <p>Photo</p>
                        </div>
                        <div className="video">
                            <img src="./images/video.png" alt="" />
                            <p>Video</p>
                        </div>
                        <div className="article">
                            <img src="./images/article.png" alt="" />
                            <p>Article</p>
                        </div>
                        <button onClick={handlePopup} className='post'>Post</button>
                    </div>
                </div>
                <Card 
                    imgsrc = {sdata[0].imgsrc}
                    uname = {sdata[0].uname}
                    mainimg = {sdata[0].mainimg}
                    about = {sdata[0].about}
                    intro = {sdata[0].intro}
                />
                 <Card 
                    imgsrc = {sdata[1].imgsrc}
                    uname = {sdata[1].uname}
                    mainimg = {sdata[1].mainimg}
                    about = {sdata[1].about}
                    intro = {sdata[1].intro}
                />
            </div>
            {popup? <PostPopup data={closePopup}/> : ""}
        </>
    )
}


export default Feed