import React, { useState } from 'react'
import './Feed.css'
import Card from './Card'
import sdata from './sdata.json'
import PostPopup from './PostPopup'

const Feed = ({data}) => {
    console.log(data)
    const [values, setValues] = useState({
        desc: '',
      });
      
    
      const handleChange = e => {
        setValues(oldValues => ({
          ...oldValues,
          [e.target.name]: e.target.value
        }));
      }
    const [popup, setPopup]=useState(false);
    const handlePopup =()=>{
        setPopup(!popup)
    }
    
    const closePopup = ()=>{
        setPopup(false)
    }
    if( data.length===0){
        return(
            <>
            <div className="main-feed">
                <div className="feed">
                    <div className="feed-top">
                        <img className='fimg' src="./images/feedpic.png" alt="" />
                        <form action="/post" method="POST">
                            <input id="desc" name="desc" className='ftext' type="text" placeholder='What you would like to share?' value={values.desc}
                            onChange={handleChange} />
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
                <div style={{color: "red",marginLeft:"30%",marginRight:"30%",fontSize: "40px" }}>
                    Empty
                </div>
                </div>
            </>
        )
    }else{
        return (
            <>
                
                <div className="main-feed">
                    <div className="feed">
                        <div className="feed-top">
                            <img className='fimg' src="./images/feedpic.png" alt="" />
                            <form action="/post" method="POST">
                            <input id="desc" name="desc" className='ftext' type="text" placeholder='What you would like to share?' value={values.desc}
                            onChange={handleChange} />
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
                    
                    { data.map((item, i) => (
                    
                    <Card 
                        id  = {item._id}
                        imgsrc = {sdata[0].imgsrc}
                        uname = {sdata[0].uname}
                        mainimg = {sdata[0].mainimg}
                        about = {sdata[0].about}
                        intro = {item.desc}
                    />
                    ))}   
                </div>
                {popup? <PostPopup data={closePopup}/> : ""}
            </>
        )
    }
    
}

export default Feed